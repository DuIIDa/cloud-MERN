import styled from 'styled-components'

export const ImgBtn =styled.img`
    width: 20px;
    height: 34px;
    padding: 2px;

    &:hover {
        border-bottom: solid 1px ${props => props.theme.colors.fontColor}; 
    }
`
export const ButtonImg = styled.button`
    border: 0;
    outline: 0;
    background-color: rgba(0,0,0,0);
    cursor: pointer;


    &:not(:last-child) {
        margin-right: 8px;
    }
`