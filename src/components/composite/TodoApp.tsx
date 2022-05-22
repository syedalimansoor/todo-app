import React from "react";
import ToggleMode from "../atomic/ToggleMode";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

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
