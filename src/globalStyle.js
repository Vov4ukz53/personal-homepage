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
       background-color: ${({ theme }) => theme.colors.background};
       color: ${({ theme }) => theme.colors.mainTextColor};
   }
`;

export default GlobalStyle;