import styled from 'styled-components'
import {COLORS} from '../../../utils/colors'

export const NavbarContainer = styled.div`
    background: ${COLORS.header};
    box-shadow: 0px 3px 4px rgba(92, 92, 92, 0.25);
`

export const NavbarBlock = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 50px 8px 50px;
`

export const ContentBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Img = styled.img`
    margin-right: 16px
`