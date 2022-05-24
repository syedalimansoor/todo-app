import Page from "$/components/layout/Page";
import { useAppSelector } from "$/hooks";
import { modeSelector } from "$/slices/modeSlice";
import themes from "$/themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size.regular};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.text.secondary.default}
}
`;

function App() {
  const mode = useAppSelector(modeSelector);
  const theme = themes[mode];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page />
    </ThemeProvider>
  );
}

export default App;
