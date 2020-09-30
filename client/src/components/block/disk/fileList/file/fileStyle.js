import styled from 'styled-components'

export const FileBox = styled.div`
    border-bottom: solid 2px ${props => props.theme.colors.fontColor};
    margin: 10px 0px;

    display: grid;
    grid-template-columns: 1fr 4fr repeat(4, 1fr);
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
    }

    &:hover div{
        display: block;
    }
`
export const Img = styled.img`
    justify-self: center;
`

export const FileName = styled.div`
    grid-column-start: 2;
`
export const FileDate = styled.div`
    grid-column-start: 5;
`
export const FileSize = styled.div`
    grid-column-start: 6;
`

export const BtnBox = styled.div`
    display: none;
    grid-column-start: 7;
`
