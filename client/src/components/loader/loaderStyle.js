import styled from 'styled-components'

export const LoaderBlock = styled.div`
    margin: 0 auto;
    margin-top: 15%;

    width: 16em;
    height: 8em;
    position: relative;
    overflow: hidden;

    ::before, ::after {
        content: '';
        position: absolute;
        bottom: 0;
    }

    ::before {
        width: inherit;
        height: 0.2em;
        background-color: ${props => props.theme.colors.fontColor};
    }

    ::after {
        box-sizing: border-box;
        width: 50%;
        height: inherit;
        border: 0.2em solid ${props => props.theme.colors.fontColor};
        border-radius: 50%;
        left: 25%;
    }

    & span {
        position: absolute;
        width: 5%;
        height: 10%;
        background-color: white;
        border-radius: 50%;
        bottom: 0.2em;
        left: -5%;
        animation: 2s linear infinite;
        transform-origin: 50% -3em;
        animation-name: run, rotating;
    }

    & span:nth-child(2) {
        animation-delay: 0.075s;
    }

    & span:nth-child(3) {
        animation-delay: 0.15s;
    }

    @keyframes run {
        0% {left: -5%;}
        10%, 60% {left: calc((100% - 5%) / 2);}
        70%, 100% {left: 100%;}
    }

    @keyframes rotating {
        0%, 10% {transform: rotate(0deg);}
        60%, 100% {transform: rotate(-1turn);}
    }
`

