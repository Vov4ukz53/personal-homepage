import { ThemeProvider } from "styled-components";
import GlobalStyle from './globalStyle';
import { lightMode } from "./theme";

function App() {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyle />
      <>
        nanana
      </>
    </ThemeProvider>
  );
}

export default App;
