import styled from "styled-components";

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0px;
    padding: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.tablets}px){
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const Item = styled.li`
    line-height: 1.4;
    list-style: none;
    padding-left: 25px;
    position: relative;
    margin-bottom: 8px;
    letter-spacing: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
        font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1216 - 320)));
        padding-left: calc(14px + (25 - 14) * ((100vw - 320px) / (1216 - 320)));
    }

    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0px, -50%);
        background: ${({theme})=>theme.colors.backgroundButton};
        width: 9px;
        height: 9px;
        border-radius: 50%;

        @media(max-width:${({ theme }) => theme.breakpoints.container}px){
            width: calc(6px + (9 - 6) * ((100vw - 320px) / (1216 - 320)));
            height: calc(6px + (9 - 6) * ((100vw - 320px) / (1216 - 320)));
        }
    }
`;

