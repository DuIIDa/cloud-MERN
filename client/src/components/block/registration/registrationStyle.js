import styled from 'styled-components'
import {COLORS} from '../../../utils/colors'

export const RegBlock = styled.div`
    max-width: 537px;
    background: ${COLORS.header};
    border-radius: 27px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    padding: 25px 33px 17px 33px;
`


export const Title = styled.h3`
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 17px;
`