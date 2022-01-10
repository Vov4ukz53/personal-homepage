import {
  Wrapper,
  Image,
  Content,
  Title,
  SubTitle,
  Info,
  Link,
  Letter,
  Icon,
} from "./styled";
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
        I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
      </Info>
      <Link href="mailto:Vov4ukz53@gmail.com" title="Vov4ukz53@gmail.com">
        <Letter />
        Hire Me
      </Link >
    </Content>
  </Wrapper>
);

export default AboutMe;