import { email } from "../../../email";
import { SocialNetworks } from "./SocialNetworks";
import { Email, Icon, Info, Title, Footer } from "./styled";

export const LetsTalk = () => (
  <Footer id="letsTalk">
    <Title>Let’s talk!</Title>
    <Email href={`mailto:${email}`}>
      {email}
    </Email>
    <Info>
      I've always been interested in programming. Receantly I've taken courses, gained new skills and knowledge. And now I'm ready to start my career and improve my skills more and more.
      <Icon />
    </Info>
    <SocialNetworks />
  </Footer>
);