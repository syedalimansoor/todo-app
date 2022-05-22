import React from "react";
import ToggleMode from "$/components/atomic/ToggleMode";
import CreateTodo from "$/components/composite/CreateTodo";
import TodoList from "$/components/composite/TodoList";

const TodoApp = () => {
  return (
    <>
      <ToggleMode />
      <CreateTodo />
      <TodoList />
    </>
  );
};

export default TodoApp;
