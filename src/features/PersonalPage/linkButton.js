import styled, { css } from "styled-components";

export const LinkButton = styled.a`
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
    border: none;
    cursor: pointer;

    ${({ gitHub }) => gitHub && css`
        margin: 0 auto;
    `}

    &:hover{
        box-shadow:
        1px 1px 5px 3px ${({ theme }) => theme.colors.onHoverButton};
        /* -2px 2px 0px ${({ theme }) => theme.colors.onHoverButton},
        2px 2px 0px ${({ theme }) => theme.colors.onHoverButton},
        -2px -2px 0px ${({ theme }) => theme.colors.onHoverButton}; */
    }

    &:active{
        box-shadow: inset 0px 2px 0px ${({ theme }) => theme.colors.selectedButton};
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(18px + (20 - 18) * ((100vw - 320px) / (1216 - 320)));
        width: calc(138px + (154 - 138) * ((100vw - 320px) / (1216 - 320)));
    }
`;