import { email } from "../links";
import { SocialNetworks } from "./SocialNetworks";
import { Email, Icon, Info, Title, Wrapper } from "./styled";

export const LetsTalk = () => (
  <Wrapper>
    <Title>Let’s talk!</Title>
    <Email href={`mailto:${email}`}>
      {email}
    </Email>
    <Info>
      I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
      <Icon/>
    </Info>
    <SocialNetworks />
  </Wrapper>
);