import styled from 'styled-components'

export const DiskHeadContainer = styled.div`
    display: flex;
    align-items: flex-end;

    margin-bottom: 25px;
`
export const Title = styled.h3`
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
`
export const BtnBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 15px;

    &:not(:last-child) {
        margin-right: 15px;
    }
`



export const DropAria = styled.div`
    width: 100%;
    height: calc(100vh - 50px - 40px);
    margin: 20px;
    border: dashed ${props => props.theme.colors.fontColor} 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`
