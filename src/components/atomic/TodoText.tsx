import React, { ChangeEventHandler, FC } from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextAreaWrapper = styled.label`
  flex-grow: 1;
  display: grid;
  align-content: center;
  padding-block: 0.5em;
  font-size: 0.7rem;

  & > *,
  &::before {
    grid-row: 1/-1;
    grid-column: 1/-1;
  }

  &::before {
    content: attr(data-value) " ";
    white-space: pre-wrap;
    overflow: hidden;
    overflow-wrap: break-word;
    visibility: hidden;
  }
`;

const TextArea = styled.textarea<{ height?: number }>`
  resize: none;
  width: 100%;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.text.todo.default};

  &:focus {
    outline: none;
  }
`;

const TodoText: FC<Props> = ({ text, onChange }) => {
  return (
    <TextAreaWrapper data-value={text}>
      <TextArea
        value={text}
        onChange={onChange}
        rows={1}
        placeholder="Create a new todo..."
      />
    </TextAreaWrapper>
  );
};

export default TodoText;
