import { email } from "./email";
import { SocialNetworks } from "./SocialNetworks";
import { Email, Title, Footer } from "./styled";

export const LetsTalk = () => (
  <Footer id="letsTalk">
    <Title>Let’s talk!</Title>
    <Email href={`mailto:${email}`}>
      {email}
    </Email>
    <SocialNetworks />
  </Footer>
);