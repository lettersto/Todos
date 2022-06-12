import React from 'react';

import Card from '../UI/Card';
import classes from './TodoItem.module.css';

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
      <div className={classes.todoItem}>
        <span className={`${classes.title} ${props.completed? classes.completed : ""}`}>{props.title}</span>
        <button onClick={deleteTodoHandler}>DELETE</button>
      </div>
    </Card>
  );
};

export default TodoItem;