import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import GlobalStyle from '../globalStyle';
import { darkMode, lightMode } from "../theme";
import PersonalPage from "../features/PersonalPage";
import { selectIsDarkTheme } from "../common/ThemeSwitch/themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <GlobalStyle />
      <PersonalPage />
    </ThemeProvider>
  )
};

export default App;
