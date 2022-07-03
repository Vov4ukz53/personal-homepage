import styled, { keyframes } from "styled-components";
import { ReactComponent as Loading } from "../images/loading.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(Loading)`
  animation: ${rotate} 2s linear infinite;

  @media (max-width:${({ theme }) => theme.breakpoints.container}px){
    width: calc(60px + (160 - 60) * ((100vw - 320px) / (1216 - 320)));
    height: calc(60px + (160 - 60) * ((100vw - 320px) / (1216 - 320)));
  }
`;