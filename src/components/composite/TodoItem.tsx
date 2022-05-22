import React from "react";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";

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
