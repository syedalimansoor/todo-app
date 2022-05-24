import React from "react";
import { modeSelector, toggle as toggleMode } from "$/slices/modeSlice";
import { useAppDispatch, useAppSelector } from "$/hooks";
import styled from "styled-components";

import dark from "$/assets/icon-sun.svg";
import light from "$/assets/icon-moon.svg";

const images = { dark, light };
const flip = { dark: "light", light: "dark" };

const ToggleButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ToggleMode = () => {
  const mode = useAppSelector(modeSelector);
  const dispatch = useAppDispatch();

  return (
    <ToggleButton type="button" onClick={() => dispatch(toggleMode())}>
      <img src={images[mode]} alt={`Switch to ${flip[mode]} mode`} />
    </ToggleButton>
  );
};

export default ToggleMode;
