import { Status } from "$/types";
import React, { ChangeEventHandler, FC } from "react";
import styled, { keyframes } from "styled-components";

import checkIcon from "$/assets/icon-check.svg";

interface Props {
  status?: Status;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const CheckboxWrapper = styled.label`
  padding: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxInput = styled.input.attrs({
  type: "checkbox",
})`
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
`;

const DisplayCheckboxWrapper = styled.div`
  width: 1.1em;
  aspect-ratio: 1;
  border-radius: 99em;
  background-image: ${(props) => props.theme.background.checkbox};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${CheckboxInput}:checked ~ &::after {
    clip-path: circle(0% at 50% 50%);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 1px;
    background-color: white;
    clip-path: circle(50% at 50% 50%);
    border-radius: 99em;
    z-index: -1;
    transition: clip-path 200ms ease;
  }
`;

const drop = keyframes`
from {
  opacity: 0;
  transform: rotate(-90deg);
}
to {
  opacity: 1;
  transform: rotate(0deg);
}
  
`;

const CheckMark = styled.img`
  transform-origin: bottom left;
  animation: ${drop} 200ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms backwards;
`;

const TodoStatus: FC<Props> = ({ status = "active", onChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        checked={status === "completed"}
        onChange={onChange}
        readOnly={!onChange}
      />
      <DisplayCheckboxWrapper>
        {status == "completed" && (
          <CheckMark
            src={checkIcon}
            alt={!!onChange ? "Toggle todo status" : ""}
          />
        )}
      </DisplayCheckboxWrapper>
    </CheckboxWrapper>
  );
};

export default TodoStatus;
