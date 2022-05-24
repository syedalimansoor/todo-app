import React, { ChangeEventHandler, useState } from "react";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";
import styled from "styled-components";
import { Status } from "$/types";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  background-color: ${(props) => props.theme.background.todo};
  border-radius: 0.2rem;
`;

const CreateTodo = () => {
  const [text, setText] = useState("");

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setText(evt.target.value);
  };

  return (
    <Wrapper>
      <TodoStatus />
      <TodoText text={text} onChange={handleTextChange} />
      <RemoveTodo />
    </Wrapper>
  );
};

export default CreateTodo;
