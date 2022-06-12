import React, { useState, useEffect } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import classes from "./App.module.css";
import api from "./api/todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  // GET all todos
  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      setFetchError(null);
      try {
        const response = await api.get("/todo/");
        setTodos(response.data);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // POST create todo
  const saveTodoHandler = async (todo) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
      id,
      title: todo,
      completed: false
    }

    try {
      const response = await api.post('/todo/', newTodo);
      const allTodos = [...todos, response.data];
      setTodos(allTodos);
    } catch (err) {
      console.log(err.message);
    }
  };

  // PUT update todo
  const changeCompletedHandler = async (todoId) => {

    const oldTodo = todos.find(todo => todo.id === todoId);
    const updatedTodo = {...oldTodo, completed: !oldTodo.completed};

    try {
      const response = await api.put(`/todo/${todoId}`, updatedTodo);
      setTodos(todos.map(todo => todo.id === todoId ? { ...response.data } : todo));
    } catch (err) {
      console.log(err.message);
    }
  };

  // DELETE todo
  const removeTodoHandler = async (todoId) => {
    try {
      await api.delete(`/todo/${todoId}`);
      const updatedTodo = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodo);
    } catch (err) {
      console.log(err.message);
    }
  };

  // content 
  let content = <p>Found no todos. Write your own!</p>;

  if (todos.length > 0) {
    content = (
      <TodoList
        todoItems={todos}
        onChangeCompleted={changeCompletedHandler}
        onRemoveTodo={removeTodoHandler}
      />
    );
  }

  if (fetchError) content = <p>Error occured!</p>;

  if (isLoading) content = <p>Loading...</p>;

  return (
    <div className={classes.todo}>
      <h3 className={classes.todoHeader}>Your Daily Todos</h3>
      <TodoForm onAddTodo={saveTodoHandler} />
      {content}
    </div>
  );
}

export default App;
