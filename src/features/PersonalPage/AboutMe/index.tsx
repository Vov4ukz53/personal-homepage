import { LinkButton } from "../LinkButton";
import avatar from "./images/avatar.jpg";
import manAndLaptopIcon from "./images/icons/man-and-laptop.png";
import {
  Wrapper,
  Image,
  Content,
  Title,
  SubTitle,
  Info,
  Letter,
  Icon,
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
        I am a young but ambitious Frontend Developer with almost two years of experience. I am ready to actively learn and grow professionally, open to new challenges and implementing my skills and knowledge in various projects to achieve high results. I am eager to join a dynamically growing team and cooperate on interesting projects.
      </Info>
      <LinkButton href="#letsTalk">
        <Letter /> Hire Me
      </LinkButton >
    </Content>
  </Wrapper >
);

export default AboutMe;