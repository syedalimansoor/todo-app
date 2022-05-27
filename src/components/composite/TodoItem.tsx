import React, { ChangeEventHandler, FC, useState } from "react";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";
import { Todo } from "$/types";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { edit, remove, toggleStatus } from "$/slices/todosSlice";
import { isDesktop } from "react-device-detect";

interface Props {
  todo: Todo;
  idx: number;
}

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(2em)
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div<{ idx: number }>`
  display: flex;
  border-block-end: 1px solid ${(props) => props.theme.border.todo};
  transition: 200ms ease;
  animation: ${rise} 500ms ease-out ${(props) => props.idx * 100}ms both;
`;

const TodoItem: FC<Props> = ({ todo, idx }) => {
  const dispatch = useDispatch();

  const [showButton, setShowButton] = useState(false);

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    if (!evt.target.value) {
      dispatch(remove({ id: todo.id }));
    } else {
      dispatch(edit({ id: todo.id, text: evt.target.value }));
    }
  };

  return (
    <Wrapper
      onMouseEnter={() => isDesktop && setShowButton(true)}
      onMouseLeave={() => isDesktop && setShowButton(false)}
      idx={idx}
    >
      <TodoStatus
        status={todo.status}
        onChange={() => dispatch(toggleStatus({ id: todo.id }))}
      />
      <TodoText
        text={todo.text}
        completed={todo.status === "completed"}
        onChange={handleTextChange}
      />
      <RemoveTodo
        onClick={() => dispatch(remove({ id: todo.id }))}
        show={isDesktop ? showButton : true}
      />
    </Wrapper>
  );
};

export default TodoItem;
