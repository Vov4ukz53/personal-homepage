import {
  Wrapper,
  Item,
  GitHubIcon,
  InstagramIcon,
  FacebookIcon,
  Link
} from "./styled";

export const SocialNetworks = () => (
  <Wrapper>
    <Item>
      <Link href="https://www.google.com/"><GitHubIcon /></Link>
    </Item>
    <Item>
      <Link href="https://www.google.com/"><FacebookIcon /></Link>
    </Item>
    <Item>
      <Link href="https://www.google.com/"><InstagramIcon /></Link>
    </Item>
  </Wrapper>
);