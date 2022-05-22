import React from "react";
import TodoItem from "$/components/composite/TodoItem";
import TodosLeft from "$/components/atomic/TodosLeft";
import FilterTodos from "$/components/atomic/FilterTodos";
import ClearTodos from "$/components/atomic/ClearTodos";

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
