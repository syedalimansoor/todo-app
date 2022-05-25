import React, { ChangeEventHandler, FC, KeyboardEventHandler } from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
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
`;

const TextArea = styled.textarea<{ height?: number; enterKeyHint?: string }>`
  resize: none;
  width: 100%;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.text.todo.default};

  &:focus {
    outline: none;
  }
`;

const TodoText: FC<Props> = ({ text, onChange, onKeyDown }) => {
  return (
    <TextAreaWrapper data-value={text}>
      <TextArea
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChange}
        rows={1}
        placeholder="Create a new todo..."
        enterKeyHint="done"
      />
    </TextAreaWrapper>
  );
};

export default TodoText;
