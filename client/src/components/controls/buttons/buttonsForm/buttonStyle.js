import styled from 'styled-components'
import {COLORS} from '../../../../utils/colors'

export const ButtonStyle = styled.button`
    background: ${COLORS.fontColor};
    border-radius: 12px;
    color: ${COLORS.header};
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    padding: 0 10px;
    border: 0;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.03)
    }

    &:focus {
        border: 0;
        outline: 0;
    }
`