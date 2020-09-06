import {createGlobalStyle} from 'styled-components'
import {COLORS} from '../utils/colors'

const GlobalStyle = createGlobalStyle`
  * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background: ${COLORS.bgColor};
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${COLORS.fontColor};
    }
`

export default GlobalStyle