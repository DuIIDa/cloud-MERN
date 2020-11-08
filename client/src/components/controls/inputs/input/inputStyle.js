import styled from 'styled-components'

export const InputStyle = styled.input`
    border: 0;
    outline: 0;
    background-color: rgba(255,255,255, 0.1);
    border-bottom: 2px solid ${props => props.theme.colors.fontColor};
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    width: 100%;

    &:hover {
        transform: scale(1.03)
    }

    &.search {
        width: 200px;
        margin-left: 10px;
        margin-bottom: 0;

        @media (max-width: 400px) {
        margin-top: 10px;
        }
    }
`