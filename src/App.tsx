import Page from "$/components/layout/Page";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { modeSelector } from "./slices/modeSlice";
import themes from "$/themes";

function App() {
  const mode = useSelector(modeSelector);
  const theme = themes[mode];

  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

export default App;
