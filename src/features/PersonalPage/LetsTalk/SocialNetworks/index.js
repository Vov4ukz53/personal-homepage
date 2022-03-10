import { GithubIcon } from "../../../../common/GithubIcon";
import { instagram, facebook, github, linkedin } from "../../../../links";
import {
  Wrapper,
  Item,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  Link
} from "./styled";

export const SocialNetworks = () => {
  const icons = [
    {
      icon: <GithubIcon />,
      link: github
    },
    {
      icon: <FacebookIcon />,
      link: facebook
    },
    {
      icon: <LinkedInIcon />,
      link: linkedin
    },
    {
      icon: <InstagramIcon />,
      link: instagram,
    },
  ];

  return (
    <Wrapper>
      {icons.map((item, index) => {
        return (
          <Item key={index}>
            <Link target="_blank" href={item.link}>
              {item.icon}
            </Link>
          </Item>
        )
      })}
    </Wrapper>
  )
};