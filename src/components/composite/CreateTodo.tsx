import React from "react";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  background-color: ${(props) => props.theme.background.todo};
  border-radius: 0.2rem;
`;

const CreateTodo = () => {
  return (
    <Wrapper>
      <TodoStatus />
      <TodoText />
      <RemoveTodo />
    </Wrapper>
  );
};

export default CreateTodo;
