import { Container } from "./Container";
import AboutMe from "./AboutMe";
import { ThemeSwitch } from "./ThemeSwitch";
import { Skills } from "./Skills";
import { LearnNext } from "./LearnNext";

const MainPage = () => (
  <Container>
    <ThemeSwitch />
    <AboutMe />
    <Skills />
    <LearnNext />

  </Container>
);

export default MainPage;

