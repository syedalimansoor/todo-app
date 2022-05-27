import React, { ChangeEventHandler, FC, useState } from "react";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";
import { Todo } from "$/types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { edit, remove, toggleStatus } from "$/slices/todosSlice";
import { isDesktop } from "react-device-detect";

interface Props {
  todo: Todo;
}

const Wrapper = styled.div`
  display: flex;
  border-block-end: 1px solid ${(props) => props.theme.border.todo};
  transition: 200ms ease;
`;

const TodoItem: FC<Props> = ({ todo }) => {
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
