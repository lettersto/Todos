import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const todoItems = props.todoItems.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
      title={item.title}
      completed={item.completed}
      onToggleCompleted={props.onChangeCompleted}
      onDeleteTodo={props.onRemoveTodo}
    />
  ));

  return (
    <React.Fragment>
      {todoItems}
    </React.Fragment>
  );
};

export default TodoList;
