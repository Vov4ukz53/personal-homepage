import styled, { css } from "styled-components";
import { ReactComponent as github } from "../images/git-hub-icon.svg";

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

export const GithubIcon = styled(github)`
    color: ${({ theme }) => theme.colors.backgroundButton};
    margin-bottom: 10px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        width: calc(32px + (40 - 32) * ((100vw - 320px) / (1216 - 320)));
        margin-bottom: calc(5px + (10 - 5) * ((100vw - 320px) / (1216 - 320)));
    }
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

export const Body = styled.div`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        gap: calc(16px + (32 - 16) * ((100vw - 320px) / (1216 - 320)));
    }

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
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

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        padding: calc(24px + (56 - 24) * ((100vw - 320px) / (1216 - 320)));
    }
`;

export const Name = styled.p`
    flex: 1 1 auto;
    font-weight: bold;
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.nameRepository};

    &:first-letter{
        text-transform: uppercase;
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1216 - 320)));
        margin-bottom: calc(16px + (24 - 16) * ((100vw - 320px) / (1216 - 320)));
    }
`;

export const Paragraph = styled.p`
    margin-top: 0px;
    margin-bottom: 24px;
    line-height: 1.4;

    ${({ demo }) => demo && css`
        margin-bottom: 8px;
    `}

    &:last-child{
        margin-bottom: 0px;
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1216 - 320)));
        margin-bottom: calc(16px + (24 - 16) * ((100vw - 320px) / (1216 - 320)));
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.backgroundButton};
    text-decoration: none;
    transition: border-bottom .3s;

    &:hover{
        border-bottom: 1px solid;
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1216 - 320)));
    }
`;











