import React, { useEffect, useRef, useState } from "react";
import TodoItem from "$/components/composite/TodoItem";
import TodosLeft from "$/components/atomic/TodosLeft";
import FilterTodos from "$/components/atomic/FilterTodos";
import ClearTodos from "$/components/atomic/ClearTodos";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { todosSelector } from "$/slices/todosSlice";
import { Filter } from "$/types";
import Sortable from "sortablejs";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  background-color: ${(props) => props.theme.background.todo};
  border-radius: 0.2em;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: background-color 200ms ease;
`;

const ListBody = styled.div``;

const ListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  padding: 0.8rem;
`;

const FilterTodosWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8rem;
  position: absolute;
  inset-block-start: calc(100% + 1rem);
  inset-inline: 0;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.background.todo};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: background-color 200ms ease;
`;

const TodoList = () => {
  const todos = useSelector(todosSelector);

  const [filter, setFilter] = useState<Filter>("all");
  const filteredTodos =
    filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  const listBody = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listBody.current && new Sortable(listBody.current, { animation: 200 });
  }, []);

  return (
    <ListWrapper>
      <ListBody ref={listBody}>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} />
        ))}
      </ListBody>
      <ListFooter>
        <TodosLeft list={filteredTodos} />
        <FilterTodosWrapper>
          <FilterTodos filter={filter} setFilter={setFilter} />
        </FilterTodosWrapper>
        <ClearTodos />
      </ListFooter>
    </ListWrapper>
  );
};

export default TodoList;
