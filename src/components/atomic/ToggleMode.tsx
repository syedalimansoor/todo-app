import React, { useEffect, useRef } from "react";
import { modeSelector, toggle as toggleMode } from "$/slices/modeSlice";
import { useAppDispatch, useAppSelector } from "$/hooks";
import styled, { keyframes } from "styled-components";

import dark from "$/assets/icon-sun.svg";
import light from "$/assets/icon-moon.svg";
import { Mode } from "$/types";

const images = { dark, light };
const flip = { dark: "light", light: "dark" };

const ToggleButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const spin = keyframes`
  from {
    transform: rotate(-360deg)
  } to {
    transform: rotate(0)
  }
`;

const Icon = styled.img<{ mode: Mode }>`
  transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: rotate(${(props) => (props.mode === "dark" ? "360" : "0")}deg);
`;

const ToggleMode = () => {
  const mode = useAppSelector(modeSelector);
  const dispatch = useAppDispatch();

  // const icon = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   if (icon.current) {
  //     icon.current.style.animationPlayState = "running";
  //   }
  // }, [mode]);

  return (
    <ToggleButton type="button" onClick={() => dispatch(toggleMode())}>
      <Icon
        src={images[mode]}
        alt={`Switch to ${flip[mode]} mode`}
        mode={mode}
      />
    </ToggleButton>
  );
};

export default ToggleMode;
