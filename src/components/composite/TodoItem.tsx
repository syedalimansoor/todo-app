import React from "react";
import RemoveTodo from "../atomic/RemoveTodo";
import TodoStatus from "../atomic/TodoStatus";
import TodoText from "../atomic/TodoText";

const TodoItem = () => {
  return (
    <>
      <TodoStatus />
      <TodoText />
      <RemoveTodo />
    </>
  );
};

export default TodoItem;
