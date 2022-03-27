import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 120px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    margin-bottom: calc(48px + (120 - 48) * ((100vw - 320px) / (1216 - 320)));
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  margin: 0px;
  font-weight: 400;
  margin-top: 8px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1216 - 320)));
  }
`;













