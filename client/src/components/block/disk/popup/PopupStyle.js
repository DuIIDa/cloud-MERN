import styled from 'styled-components'

export const PopupBlock = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    background: ${props => props.theme.colors.write};  
    padding: 20px;
    border-radius: 12px;
`

export const PopupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export const PopupClose = styled.button`
    padding: 4px 8px;
    border-radius: 37px;
    border: 1px solid ${props => props.theme.colors.fontColor};
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.fontColor};
    cursor: pointer;

    &:hover {
        transform: scale(1.1)
    }

    &:focus {
        outline: 0;
    }
`

export const PopupButton = styled.button`
    align-self: flex-end;

    padding: 4px 8px;
    border-radius: 37px;
    border: 1px solid ${props => props.theme.colors.fontColor};
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.fontColor};
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05)
    }

    &:focus {
        outline: 0;
    }
`