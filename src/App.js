import { ThemeProvider } from "styled-components";
import GlobalStyle from './globalStyle';
import { darkMode, lightMode } from "./theme";
import MainPage from "./MainPage";
import { selectIsDarkTheme } from "./MainPage/themeSlice";
import { useSelector } from "react-redux";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
