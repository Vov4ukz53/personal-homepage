import React from "react";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./hooks";
import GlobalStyle from './globalStyle';
import { darkMode, lightMode } from "./theme";
import PersonalPage from "../../features/PersonalPage";
import { selectIsDarkTheme } from "../../common/ThemeSwitch/themeSlice";

function App() {
  const isDarkTheme = useAppSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <GlobalStyle />
      <PersonalPage />
    </ThemeProvider>
  )
};

export default App;
