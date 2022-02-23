import styled from "styled-components";
import { ReactComponent as gitHubIcon } from "./images/gitHub.svg";
import { ReactComponent as facebookIcon } from "./images/facebook.svg";
import { ReactComponent as instagramIcon } from "./images/instagram.svg";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px;
  margin-bottom: 0px;
  margin-top: 56px;
`;

export const Item = styled.li`
  list-style-type: none;
  margin-right: 24px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.title};
  transition: color .3s;

  &:hover{
    color: ${({ theme }) => theme.colors.backgroundButton};
  }
`;

export const GitHubIcon = styled(gitHubIcon)`
  
`;

export const FacebookIcon = styled(facebookIcon)`
  
`;

export const InstagramIcon = styled(instagramIcon)`
  
`;

