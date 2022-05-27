import { removeCompleted } from "$/slices/todosSlice";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text.secondary.default};
  transition: 200ms ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.text.secondary.hover};
  }
`;

const ClearTodos = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(removeCompleted())}>Clear completed</Button>
  );
};

export default ClearTodos;
