import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({theme})=> theme.colors.backgroundTile};
  border-radius: 4px;
  box-shadow: 0px -2px 50px ${({theme})=> theme.colors.shadowTile},
  0px 16px 58px ${({theme})=> theme.colors.shadowTile};
  padding: 32px;
  margin-bottom: 72px;
  transition: background .3s;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    padding: calc(16px + (32 - 16) * ((100vw - 320px) / (1216 - 320)));
    margin-bottom: calc(50px + (72 - 50) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const Header = styled.div`
  padding-bottom: 15px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${({theme})=> theme.colors.borderTile};

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    margin-bottom: calc(12px + (32 - 12) * ((100vw - 320px) / (1216 - 320)));
    padding-bottom: calc(12px + (15 - 12) * ((100vw - 320px) / (1216 - 320)));
  }
`;