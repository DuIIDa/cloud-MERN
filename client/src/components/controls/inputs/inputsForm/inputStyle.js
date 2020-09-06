import styled from 'styled-components'
import {COLORS} from '../../../../utils/colors'

export const InputStyle = styled.input`
    border: 0;
    outline: 0;
    border-bottom: 2px solid ${COLORS.fontColor};
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    &:hover {
        transform: scale(1.03)
    }
`