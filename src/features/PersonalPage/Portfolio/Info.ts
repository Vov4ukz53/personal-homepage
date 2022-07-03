import styled, { css } from "styled-components";

interface InfoProps {
  error?: boolean;
};

export const Info = styled.p<InfoProps>`
  font-size: 20px;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width:${({ theme }) => theme.breakpoints.container}px){
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1216 - 320)));
    margin-bottom: calc(15px + (48 - 15) * ((100vw - 320px) / (1216 - 320)));
  }

  ${({ error }) => error && css`
    max-width: 410px;
    margin-bottom: 32px;
    margin: 0 auto;
    margin-bottom: 32px;
  `}
`;