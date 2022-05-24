import React, { FC, MouseEventHandler } from "react";
import removeIcon from "$/assets/icon-cross.svg";
import styled from "styled-components";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  show?: boolean;
}

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
`;

const Image = styled.img<{ show: boolean }>`
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 200ms ease;
  width: 0.7rem;
`;

const RemoveTodo: FC<Props> = ({ onClick, show = true }) => {
  return (
    <Button onClick={show ? onClick : undefined}>
      <Image src={removeIcon} alt="Remove todo" show={show} />
    </Button>
  );
};

export default RemoveTodo;
