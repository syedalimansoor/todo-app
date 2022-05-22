import Page from "$/components/layout/Page";
import { useSelector } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { modeSelector } from "$/slices/modeSlice";
import themes from "$/themes";

export type Theme = typeof themes["dark"] & typeof themes["light"];
export type ThemeProp = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle<ThemeProp>`
:root {
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size.regular};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.text.secondary.default}
}
`;

function App() {
  const mode = useSelector(modeSelector);
  const theme = themes[mode];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page />
    </ThemeProvider>
  );
}

export default App;
