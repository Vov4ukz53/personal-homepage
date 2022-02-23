import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html {
        box-sizing: border-box;
        height: 100%;
        }
   *,
   ::after,
   ::before {
        box-sizing: inherit;
   }
   body {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.mainText};
        transition: background .3s;
        padding-top: 115px;
        padding-bottom: 109px;
        letter-spacing: 0.05em;

        @media(max-width:${({ theme }) => theme.breakpoints.container}px){
            padding-top: calc(20px + (115 - 20) * ((100vw - 320px) / (1216 - 320)));
            padding-bottom: calc(30px + (109 - 30) * ((100vw - 320px) / (1216 - 320)));
        }
   }
`;

export default GlobalStyle;