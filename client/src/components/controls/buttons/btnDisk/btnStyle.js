import styled from 'styled-components'

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 37px;
    border: 1px solid ${props => props.theme.colors.fontColor};
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.fontColor};
    cursor: pointer;
    
    &:not(:last-child) {
        margin-bottom: 18px
    }

    &:hover {
        transform: scale(1.03)
    }

    &:focus {
        outline: 0;
    }
`