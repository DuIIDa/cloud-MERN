import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-50%);
    }

    100% {
        opacity: 1;
        transform: rotate(0);
    }
`;


export const FileBox = styled.div`
    border-bottom: solid 2px ${props => props.theme.colors.fontColor};
    margin: 10px 0px;
    animation: ${rotate} 500ms forwards;

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
