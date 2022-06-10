import React, { useRef } from 'react';

const TodoForm = (props) => {
  const todoInput = useRef();

  const addTodoHandler = (event) => {
    event.preventDefault();
    
    const enteredTodo = todoInput.current.value;

    if (enteredTodo.trim().length === 0) {
      // needs some css to inform error
      return;
    }
    props.onAddTodo(enteredTodo);
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input ref={todoInput} id="todo-form" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;