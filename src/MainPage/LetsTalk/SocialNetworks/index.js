import { GithubIcon } from "../../../common/GithubIcon";
import {
  Wrapper,
  Item,
  InstagramIcon,
  FacebookIcon,
  LindkedInIcon,
  Link
} from "./styled";

export const SocialNetworks = () => (
  <Wrapper>
    <Item>
      <Link href="https://www.google.com/"><GithubIcon social="true" /></Link>
    </Item>
    <Item>
      <Link href="https://www.google.com/"><FacebookIcon /></Link>
    </Item>
    <Item>
      <Link href="https://www.google.com/"><LindkedInIcon /></Link>
    </Item>
    <Item>
      <Link href="https://www.google.com/"><InstagramIcon /></Link>
    </Item>
  </Wrapper>
);