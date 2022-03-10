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
import { LinkButton } from "../linkButton";
import avatar from "./images/avatar.jpg";
import manAndLaptopIcon from "./images/icons/man-and-laptop.png";

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
        <Icon src={manAndLaptopIcon} />
        I'm a junior Frontend Developer working with React, searching and looking forward to new possibilities and propositions.
      </Info>
      <LinkButton href="#letsTalk">
        <Letter /> Hire Me
      </LinkButton >
    </Content>
  </Wrapper >
);

export default AboutMe;