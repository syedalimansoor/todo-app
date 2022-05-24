import React, { ChangeEventHandler, useState } from "react";
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

const TextAreaWrapper = styled.div`
  flex-grow: 1;
`;

const CreateTodo = () => {
  const [text, setText] = useState("");

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setText(evt.target.value);
  };

  return (
    <Wrapper>
      <TodoStatus />
      <TextAreaWrapper>
        <TodoText text={text} onChange={handleChange} />
      </TextAreaWrapper>
      <RemoveTodo />
    </Wrapper>
  );
};

export default CreateTodo;
