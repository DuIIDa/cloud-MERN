import styled from 'styled-components'

export const InputSearch = styled.input`
    width: 200px;
    margin-left: 10px;

    border: 0;
    outline: 0;
    border-bottom: 2px solid ${props => props.theme.colors.fontColor};
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    &:hover {
        transform: scale(1.03)
    }

    @media (max-width: 400px) {
        margin-top: 10px;
    }
`
