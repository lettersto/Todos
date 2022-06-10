import React, { Fragment, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const DUMMY_TODOS = [
  {id: 1, title: "빨래하기", completed: "false" },
  {id: 2, title: "공부하기", completed: "false" },
  {id: 3, title: "놀기", completed: "true" },
];

function App() {

  const [todos, setTodos] = useState(DUMMY_TODOS);

  return (
    <Fragment>
      <h3>Todo</h3>
      <TodoForm />
      <TodoList todoItems={todos} />
    </Fragment>
  );
}

export default App;
