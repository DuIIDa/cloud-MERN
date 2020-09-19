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
`
export const FileListDate = styled.p`
    grid-column-start: 5;
`
export const FileListSize = styled.p`
    grid-column-start: 6;
`