import styled from 'styled-components'

export const ButtonStyle = styled.button`
    background: ${props => props.theme.colors.fontColor};
    border-radius: 12px;
    color: ${props => props.theme.colors.writeNavbar};
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    padding: 0 10px;
    border: 0;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.03)
    }

    &:focus {
        border: 0;
        outline: 0;
    }
`