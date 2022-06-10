import React from 'react';

import Card from '../UI/Card';

const TodoItem = (props) => {

  const toggleCompletedHandler = () => {
    props.onToggleCompleted(props.id)
  };

  const deleteTodoHandler = (event) => {
    event.stopPropagation(); // onClick 내에 쓰여서 bubbling 발생
    props.onDeleteTodo(props.id)
  };

  return (
    <Card onClick={toggleCompletedHandler}>
      <span>{props.title}</span>
      <span>{props.completed ? "TRUE" : "FALSE"}</span>
      <button onClick={deleteTodoHandler}>DELETE</button>
    </Card>
  );
};

export default TodoItem;