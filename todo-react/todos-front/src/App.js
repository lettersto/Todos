import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import classes from "./App.module.css";

const DUMMY_TODOS = [
  { id: 1, title: "빨래하기", completed: false },
  { id: 2, title: "공부하기", completed: false },
  { id: 3, title: "놀기", completed: true },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const saveTodoHandler = (todo) => {
    const updatedTodo = [
      { id: Math.random().toString(), title: todo, completed: false },
      ...todos,
    ];
    setTodos(updatedTodo);
  };

  const changeCompletedHandler = (todoId) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodo);
    // console.log('changed!'); // for eventbubbling test
  };

  const removeTodoHandler = (todoId) => {
    const updatedTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodo);
  };

  return (
    <div className={classes.todo}>
      <h3 className={classes.todoHeader}>Your Daily Todos</h3>
      <TodoForm onAddTodo={saveTodoHandler} />
      <TodoList
        todoItems={todos}
        onChangeCompleted={changeCompletedHandler}
        onRemoveTodo={removeTodoHandler}
      />
    </div>
  );
}

export default App;
