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

export const DiskUpload = styled.div`
    display: flex;
    align-items: center;
`
export const InputFile = styled.input`
    display: none;
`
export const LabelFile  = styled.label`
    border: 2px dashed ${props => props.theme.colors.fontColor};
    padding: 8px 20px;
    cursor: pointer;
`