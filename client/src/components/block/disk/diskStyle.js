import styled from 'styled-components'

export const DiskHeadContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 25px;

    & > .btnBlockOne {
        display: flex;
        align-items: flex-end;
        flex-direction: row; 

        @media (max-width: 660px) {
            flex-direction: column; 
            align-items: flex-start;
        }
    }
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
    align-items: flex-start;
    margin-bottom: 15px;

    &:not(:last-child) {
        margin-right: 15px;
    }

    &.btnBlockTwo {
        align-items: flex-end;

        & > .usedSpace {
            margin-bottom: 30px;
        }
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
