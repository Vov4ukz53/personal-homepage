import styled from "styled-components";
import { ReactComponent as checked } from "./images/icons/checked.svg";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    margin-top: -27px;
    margin-bottom: 63px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        grid-gap: calc(12px + (66 - 12) * ((100vw - 320px) / (1216 - 320)));
        margin-bottom: calc(48px + (63 - 48) * ((100vw - 320px) / (1216 - 320)));
    }

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
        margin-top: -13.5px;
    }
`;

export const Image = styled.img`
    width: 395px;
    height: 395px;
    border-radius: 50%;
    object-fit: cover;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        width: calc(130px + (395 - 130) * ((100vw - 320px) / (1216 - 320)));
        height: calc(130px + (395 - 130) * ((100vw - 320px) / (1216 - 320)));
    }
`;

export const Content = styled.div`
    margin-top: 65px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        margin-top: calc(12px + (65 - 12) * ((100vw - 320px) / (1216 - 320)));
    }

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        margin-top: 0px;
    }
`;

export const SubTitle = styled.p`
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-top: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        margin-bottom: calc(8px + (10 - 8) * ((100vw - 320px) / (1216 - 320)));
    }
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 35px;
    margin-top: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(22px + (38 - 22) * ((100vw - 320px) / (1216 - 320)));
        margin-bottom: calc(16px + (35 - 16) * ((100vw - 320px) / (1216 - 320)));
    }
`;

export const Info = styled.p`
    font-size: 20px;
    line-height: 1.4;
    max-width: 600px;
    margin-bottom: 30px;
    margin-top: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1216 - 320)));
        margin-bottom: calc(24px + (30 - 24) * ((100vw - 320px) / (1216 - 320)));
    }

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        max-width: 100%;
    }
`;

export const Link = styled.a`
    width: 154px;
    padding: 11px 0px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textButton};
    background: ${({ theme }) => theme.colors.backgroundButton};
    transition: all .3s;
    border: 1px solid ${({ theme }) => theme.colors.borderButton};
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        box-shadow:
        2px -2px 0px ${({ theme }) => theme.colors.onHoverButton},
        -2px 2px 0px ${({ theme }) => theme.colors.onHoverButton},
        2px 2px 0px ${({ theme }) => theme.colors.onHoverButton},
        -2px -2px 0px ${({ theme }) => theme.colors.onHoverButton};
    }

    &:active{
        box-shadow: inset 0px 2px 0px ${({ theme }) => theme.colors.selectedButton};
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(18px + (20 - 18) * ((100vw - 320px) / (1216 - 320)));
        width: calc(138px + (154 - 138) * ((100vw - 320px) / (1216 - 320)));
    }
`;

export const Letter = styled(checked)`
    margin-right: 18px;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        margin-right: 14px;
        height: 18px;
    }
`;

export const Icon =  styled.img`
    transform: translate(0px, 6px);
    margin-right: 16px;
`;


