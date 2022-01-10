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
       transition: all .3s;
   }
`;

export default GlobalStyle;