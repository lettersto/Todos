import React, { useRef } from 'react';

import classes from './TodoForm.module.css';

const TodoForm = (props) => {
  const todoInput = useRef();

  const addTodoHandler = (event) => {
    event.preventDefault();
    
    const enteredTodo = todoInput.current.value;

    if (enteredTodo.trim().length === 0) {
      // needs some css to inform error
      todoInput.current.value = "";
      return;
    }
    props.onAddTodo(enteredTodo);
    todoInput.current.value = "";
  };

  return (
    <form onSubmit={addTodoHandler} className={classes.todoForm}>
      <input ref={todoInput} id="todo-form" type="text" />
      {/* <button type="submit">Add</button> */}
    </form>
  );
};

export default TodoForm;