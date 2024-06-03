import { LinkButton } from "../LinkButton";
import avatar from "./images/avatar.jpg";
import {
  Wrapper,
  Image,
  Content,
  Title,
  SubTitle,
  Info,
  Letter,
} from "./styled";

const AboutMe = () => (
  <Wrapper>
    <Image src={avatar} alt="Volodymyr Bronevych" />
    <Content>
      <SubTitle>
        This is
      </SubTitle>
      <Title>
        Volodymyr Bronevych
      </Title>
      <Info>
        I am a Frontend Developer with two years of experience. Ready to actively learn and grow professionally, open to new challenges and implementing my skills and knowledge in various projects to achieve high results. I am eager to join a dynamically growing team and cooperate on interesting projects.
      </Info>
      <LinkButton href="#letsTalk">
        <Letter /> Hire Me
      </LinkButton >
    </Content>
  </Wrapper >
);

export default AboutMe;