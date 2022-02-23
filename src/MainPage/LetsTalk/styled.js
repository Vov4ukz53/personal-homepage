import styled from "styled-components";
import hand from "./hand.png";

export const Wrapper = styled.footer`
  max-width: 670px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  margin: 0px 12px 0px 0px;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const Email = styled.a`
  color: inherit;
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  margin-bottom: 24px;
  display: block;
  transition: color .3s;

  &:hover{
    color: ${({ theme }) => theme.colors.backgroundButton};
  }
`;

export const Info = styled.p`
  line-height: 1.4;
  margin: 0px;
`;

export const Icon = styled.span`
  display: inline-block;
  position: relative;
  height: 18px;

  &:after{
    content: '';
    position: absolute;
    top: 0px;
    left: 10px;
    width: 24px;
    height: 24px;
    background-image: url(${hand});
  }
`;






