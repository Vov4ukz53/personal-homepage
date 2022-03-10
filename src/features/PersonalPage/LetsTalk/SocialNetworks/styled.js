import styled from "styled-components";
import { ReactComponent as facebookIcon } from "./images/facebook.svg";
import { ReactComponent as instagramIcon } from "./images/instagram.svg";
import { ReactComponent as linkedInIcon } from "./images/linkedIn.svg";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px;
  margin-bottom: 0px;
  margin-top: 56px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    margin-top: calc(40px + (56 - 40) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const Item = styled.li`
  list-style-type: none;
  margin-right: 24px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    margin-right: calc(16px + (24 - 16) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.title};
  transition: color .3s;
  display: flex;

  &:hover{
    color: ${({ theme }) => theme.colors.backgroundButton};
  }
`;

export const FacebookIcon = styled(facebookIcon)`
  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    width: calc(32px + (48 - 32) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const InstagramIcon = styled(instagramIcon)`
  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    width: calc(32px + (48 - 32) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const LinkedInIcon = styled(linkedInIcon)`
  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    width: calc(32px + (48 - 32) * ((100vw - 320px) / (1216 - 320)));
  }
`;

