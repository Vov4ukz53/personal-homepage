import styled, { css } from "styled-components";

interface TitleProps {
  portfolio?: string;
};

export const Title = styled.h2<TitleProps>`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.title};
  margin: 0px;
  display: inline-block;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    font-size: calc(18px + (30 - 18) * ((100vw - 320px) / (1216 - 320)));
  }

  @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
    letter-spacing: 0px;
  }

  ${({ portfolio }) => portfolio && css`
    display: block;
  `}
`;

export const Icon = styled.img`
  margin-left: 16px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    width: calc(16px + (27 - 16) * ((100vw - 320px) / (1216 - 320)));
    height: calc(16px + (27 - 16) * ((100vw - 320px) / (1216 - 320)));
    margin-left: calc(12px + (16 - 12) * ((100vw - 320px) / (1216 - 320)));
  }
`;

