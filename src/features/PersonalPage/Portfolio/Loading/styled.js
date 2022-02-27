import styled, { keyframes } from "styled-components";
import { ReactComponent as loading } from "../images/loading.svg";

const rotate = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }
`;

export const LoadingIcon = styled(loading)`
    animation: ${rotate} 2s linear infinite;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        width: calc(60px + (160 - 60) * ((100vw - 320px) / (1216 - 320)));
        height: calc(60px + (160 - 60) * ((100vw - 320px) / (1216 - 320)));
    }
`;