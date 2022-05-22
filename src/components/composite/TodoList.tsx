import React from "react";
import ClearTodos from "../atomic/ClearTodos";
import FilterTodos from "../atomic/FilterTodos";
import TodosLeft from "../atomic/TodosLeft";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <>
      <TodoItem />
      <TodosLeft />
      <FilterTodos />
      <ClearTodos />
    </>
  );
};

export default TodoList;
