import React from "react";
import RemoveTodo from "../atomic/RemoveTodo";
import TodoStatus from "../atomic/TodoStatus";
import TodoText from "../atomic/TodoText";

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
