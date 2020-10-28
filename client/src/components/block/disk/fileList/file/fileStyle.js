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


export const FileBoxList = styled.div`
    border-bottom: solid 2px ${props => props.theme.colors.fontColor};
    margin: 10px 0px;
    animation: ${rotate} 500ms forwards;

    display: grid;
    grid-template-columns: 1fr 4fr repeat(4, 1fr);
    align-items: center;
    cursor: pointer;

    & > .box-list-button {
        display: none;
        grid-column-start: 7;
    }

    &:hover {
        transform: scale(1.01);
    }

    &:hover > .box-list-button{
        display: block;
    }
`
export const ImgList = styled.img`
    justify-self: center;
`

export const FileDate = styled.div`
    grid-column-start: 5;
    @media (max-width: 600px) {
        grid-column-start: 4;
    }
`
export const FileSize = styled.div`
    grid-column-start: 6;
    justify-self: end;
    margin-right: 10px;
`



// PLATE
export const FileBoxPlate = styled.div`
    width: 150px;
    height: 150px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .box-plate-button {
        display: none;
    }

    &:hover {
        transform: scale(1.01);
    }

    &:hover > .box-plate-button{
        display: block;
    }

`
export const ImgPlate = styled.img`
    height: 100px;
    width: 100px;
`

export const NameBlock = styled.div`

    &.list {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &.plate {
        display: flex;
        & > .file-name-plate {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        }
    }

`
