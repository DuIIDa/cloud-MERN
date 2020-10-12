import styled from 'styled-components'

export const FileListContainer = styled.div`
    margin: 20px 0px;
    position: relative;
`

export const FileListHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr repeat(4, 1fr);
    margin-bottom: 10px;

    &:after {
        content: '';
        position: absolute;
        top: 20px;
        display: block;
        height: 2px;
        width: 100%;
        background: ${props => props.theme.colors.fontColor};
    }
`

export const FileListName = styled.p`
    grid-column-start: 2;
    cursor: pointer;
    &:hover {
        color: #324ab2;
        text-shadow: 0 0 10px ${props => props.theme.colors.fontColor}, 0 0 50px ${props => props.theme.colors.fontColor};
    }
`
export const FileListDate = styled.p`
    grid-column-start: 5;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        color: #324ab2;
        text-shadow: 0 0 10px ${props => props.theme.colors.fontColor}, 0 0 50px ${props => props.theme.colors.fontColor};
    }
`
export const FileListSize = styled.p`
    grid-column-start: 6;
    cursor: pointer;
    &:hover {
        color: #324ab2;
        text-shadow: 0 0 10px ${props => props.theme.colors.fontColor}, 0 0 50px ${props => props.theme.colors.fontColor};
    }
`

export const ImgBlock = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    text-align: center;
`