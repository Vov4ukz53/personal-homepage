import React, { useEffect } from "react";
import { useAppDispatch } from "../../core/App/hooks";
import { Container } from "../../common/Container";
import AboutMe from "./AboutMe";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Skills } from "./Skills";
import { LearnNext } from "./LearnNext";
import { Portfolio } from "./Portfolio";
import { LetsTalk } from "./LetsTalk";
import { fetchRepositories } from "../../core/personalPageSlice";

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <Container>
      <ThemeSwitch />
      <AboutMe />
      <Skills />
      <LearnNext />
      <Portfolio />
      <LetsTalk />
    </Container>
  );
};

export default MainPage;

