import React from "react";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";

const CreateTodo = () => {
  return (
    <>
      <TodoStatus />
      <TodoText />
      <RemoveTodo />
    </>
  );
};

export default CreateTodo;
