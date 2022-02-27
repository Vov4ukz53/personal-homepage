import styled from "styled-components";
import { ReactComponent as error } from "../images/error.svg";

export const ErrorIcon = styled(error)`
  margin-bottom: 23px;
  color: ${({ theme }) => theme.colors.title};

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    margin-bottom: calc(10px + (23 - 10) * ((100vw - 320px) / (1216 - 320)));
  }

  @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
    height: 30px;
  }
`;

export const ErrorTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  margin-top: 0px;
  margin-bottom: 32px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    font-size: calc(17px + (24 - 17) * ((100vw - 320px) / (1216 - 320)));
    margin-bottom: calc(15px + (32 - 15) * ((100vw - 320px) / (1216 - 320)));
  }
`;