import { GithubIcon } from "../../../../common/GithubIcon";
import { instagram, facebook, github, linkedin } from "../../../PersonalPage/links";
import { FacebookIcon, LinkedInIcon, InstagramIcon } from "./styled";

interface Iicons {
  icon: JSX.Element;
  link: string;
}

export const icons: Iicons[] = [
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