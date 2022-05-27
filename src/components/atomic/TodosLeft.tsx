import { Todo } from "$/types";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  list: Todo[];
}

const StyledText = styled.span`
  transition: 200ms ease;
  color: ${(props) => props.theme.text.secondary.default};
`;

const TodosLeft: FC<Props> = ({ list }) => {
  const nLeft = list.filter((todo) => todo.status === "active").length;

  return (
    <StyledText>
      {nLeft} item{nLeft === 1 ? "" : "s"} left
    </StyledText>
  );
};

export default TodosLeft;
