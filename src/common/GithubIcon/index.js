import styled, { css } from "styled-components";
import { ReactComponent as github } from "./gitHub.svg";

export const GithubIcon = styled(github)`
  color: ${({ theme }) => theme.colors.backgroundButton};
  margin-bottom: 10px;
  
  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    width: calc(32px + (40 - 32) * ((100vw - 320px) / (1216 - 320)));
    margin-bottom: calc(5px + (10 - 5) * ((100vw - 320px) / (1216 - 320)));
  }

  ${({ social }) => social && css`
    width: 48px;
    height: 48px;
    margin-bottom: 0px;
    color: inherit;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
      width: calc(32px + (48 - 32) * ((100vw - 320px) / (1216 - 320)));
      margin-bottom: 0px;
    }
  `}
`;