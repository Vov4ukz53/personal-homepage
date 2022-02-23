import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "./Container";
import AboutMe from "./AboutMe";
import { ThemeSwitch } from "./ThemeSwitch";
import { Skills } from "./Skills";
import { LearnNext } from "./LearnNext";
import { Portfolio } from "./Portfolio";
import { LetsTalk } from "./LetsTalk";
import { fetchRepositories } from "../MainPage/mainPageSlice";

const MainPage = () => {
  const dispatch = useDispatch();

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

