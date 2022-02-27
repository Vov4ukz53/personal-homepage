import { GithubIcon } from "../../../../common/GithubIcon";
import {
  Wrapper,
  Item,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  Link
} from "./styled";

export const SocialNetworks = () => {
  const icons = [<InstagramIcon />, <FacebookIcon />, <LinkedInIcon />, <GithubIcon />];

  return (
    <Wrapper>
      {icons.map((icon, index) => {
        return (
          <Item key={index}>
            <Link href="https://www.google.com/">
              {icon}
            </Link>
          </Item>
        )
      })}

      {/* <Item>
        <Link href="https://www.google.com/"><GithubIcon social="true" /></Link>
      </Item>
      <Item>
        <Link href="https://www.google.com/"><FacebookIcon /></Link>
      </Item>
      <Item>
        <Link href="https://www.google.com/"><LinkedInIcon /></Link>
      </Item>
      <Item>
        <Link href="https://www.google.com/"><InstagramIcon /></Link>
      </Item> */}
    </Wrapper>
  );
};