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
import { email } from "../links";

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
        I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
      </Info>
      <LinkButton
        href={`mailto:${email}`}
        title={email}
      >
        <Letter /> Hire Me
      </LinkButton >
    </Content>
  </Wrapper >
);

export default AboutMe;