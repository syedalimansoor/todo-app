import React from "react";
import TodoApp from "$/components/composite/TodoApp";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { modeSelector } from "$/slices/modeSlice";
import { Theme } from "$/types";

//#region import and setup backgrounds
import desktop_dark from "$/assets/bg-desktop-dark.jpg";
import mobile_dark from "$/assets/bg-mobile-dark.jpg";
import desktop_light from "$/assets/bg-desktop-light.jpg";
import mobile_light from "$/assets/bg-mobile-light.jpg";

const backgrounds = {
  desktop: {
    dark: desktop_dark,
    light: desktop_light,
  },
  mobile: {
    dark: mobile_dark,
    light: mobile_light,
  },
};

//#endregion

const StyledPage = styled.div`
  background-color: ${(props) => props.theme.background.page};

  min-height: 100vh;
  transition: 200ms ease;
  position: relative;
  display: grid;
  justify-content: stretch;
  align-content: center;
  padding: 1.4rem;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset-inline: 0;
  top: 0;
`;

const Page = () => {
  const mode = useSelector(modeSelector);
  const theme = useTheme() as Theme;

  return (
    <StyledPage>
      <picture>
        <source
          srcSet={backgrounds.desktop[mode]}
          media={`(min-width: ${theme.breakpoint.mobile})`}
        />
        <BackgroundImage src={backgrounds.mobile[mode]} alt="" />
      </picture>
      <TodoApp />
    </StyledPage>
  );
};

export default Page;
