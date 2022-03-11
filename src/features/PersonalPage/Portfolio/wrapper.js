import styled from "styled-components";

export const StyledWrapper = styled.div`
  text-align: center;
  margin-top: 95px;
  margin-bottom: 140px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}px){
    margin-top: calc(24px + (95 - 24) * ((100vw - 320px) / (1216 - 320)));
    margin-bottom: calc(35px + (140 - 35) * ((100vw - 320px) / (1216 - 320)));
  }
`;