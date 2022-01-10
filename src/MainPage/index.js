import { Container } from "./Container";
import AboutMe from "./AboutMe";
import {ThemeSwitch} from "./ThemeSwitch";

const MainPage = () => (
    <Container>
        <ThemeSwitch />
        <AboutMe />
    </Container>
);

export default MainPage;

