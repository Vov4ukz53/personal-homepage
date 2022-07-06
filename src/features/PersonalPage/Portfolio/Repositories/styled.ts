import styled, { css } from "styled-components";

interface ParagraphProps {
  demo?: boolean;
};

export const Body = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;

  @media (max-width:${({ theme }) => theme.breakpoints.container}px){
    gap: calc(16px + (32 - 16) * ((100vw - 320px) / (1216 - 320)));
  }

  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  display:flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundTile};
  padding: 56px;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.borderTile};
  box-shadow: 0px - 2px 50px ${({ theme }) => theme.colors.shadowTile},
  0px 16px 58px ${({ theme }) => theme.colors.shadowTile};
  transition: border .3s;

  &:hover{
    border: 6px solid ${({ theme }) => theme.colors.hoverBorderTile};
  }

  @media (max-width:${({ theme }) => theme.breakpoints.container}px){
    padding: calc(24px + (56 - 24) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-top: 0px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.nameRepository};

  &:first-letter{
    text-transform: uppercase;
  }

  @media (max-width:${({ theme }) => theme.breakpoints.container}px){
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1216 - 320)));
    margin-bottom: calc(16px + (24 - 16) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin-top: 0px;
  margin-bottom: 24px;
  line-height: 1.4;
  flex: 1 1 auto;

  ${({ demo }) => demo && css`
    margin-bottom: 8px;
  `}

  &:last-child{
    margin-bottom: 0px;
  }

  @media (max-width:${({ theme }) => theme.breakpoints.container}px){
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1216 - 320)));
    margin-bottom: calc(16px + (24 - 16) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.backgroundButton};
  text-decoration: none;

  &:hover{
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundButton};
  }

  @media (max-width:${({ theme }) => theme.breakpoints.container}px){
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1216 - 320)));
  }
`;