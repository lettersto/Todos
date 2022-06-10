import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.completed}</span>
    </div>
  );
};

export default TodoItem;