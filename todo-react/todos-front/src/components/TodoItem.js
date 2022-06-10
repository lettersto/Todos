import React from 'react';

import Card from '../UI/Card';

const TodoItem = (props) => {

  const toggleCompletedHandler = () => {
    props.onToggleCompleted(props.id)
  };

  return (
    <Card onClick={toggleCompletedHandler}>
      <span>{props.title}</span>
      <span>{props.completed ? "TRUE" : "FALSE"}</span>
      <button>MODIFY</button>
      <button>DELETE</button>
    </Card>
  );
};

export default TodoItem;