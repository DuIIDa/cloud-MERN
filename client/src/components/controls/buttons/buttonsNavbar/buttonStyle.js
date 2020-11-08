import styled from 'styled-components'

export const ButtonStyle = styled.button`
    align-self: flex-end;

    padding: 4px 8px;
    border-radius: 37px;
    border: 1px solid ${props => props.theme.colors.fontColor};
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.fontColor};
    cursor: pointer;

    &:hover {
        transform: scale(1.03)
    }

    &:focus {
        outline: 0;
    }

    &.registration {
        width: 150px;
        margin-left: 20px;
    }
    &.enter, &.back{
        width: 120px;
    }

    > a {
        text-decoration: none;
        color: ${props => props.theme.colors.fontColor};
    }

    @media (max-width: 400px) {
        margin-bottom: 10px;
    }

    @media (max-width: 640px) {
        &.enter {
            margin-bottom: 10px;
        }
    }
`