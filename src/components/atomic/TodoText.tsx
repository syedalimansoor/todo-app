import React, { ChangeEventHandler, FC, KeyboardEventHandler } from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  completed?: boolean;
}

const TextAreaWrapper = styled.label`
  flex-grow: 1;
  display: grid;
  align-content: center;
  padding-block: 0.8em;
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

  @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
    font-size: 1rem;
  }
`;

const TextArea = styled.textarea<{
  height?: number;
}>`
  resize: none;
  width: 100%;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.text.todo.default};
  overflow-x: hidden;
  transition: 200ms ease;

  &::placeholder {
    color: ${(props) => props.theme.text.secondary.default};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${(props) => props.theme.text.todo.completed};
    text-decoration: line-through;
  }
`;

const TodoText: FC<Props> = ({ text, completed, onChange, onKeyDown }) => {
  return (
    <TextAreaWrapper data-value={text}>
      <TextArea
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChange}
        rows={1}
        placeholder="Create a new todo..."
        disabled={completed}
      />
    </TextAreaWrapper>
  );
};

export default TodoText;
