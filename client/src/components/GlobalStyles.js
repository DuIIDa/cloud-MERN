import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition:0.1s;

        & > #root {
            width: 100%;
            height: 100%;
        }

        & > .App {
            height: 100%;
        }


        /* SLIDER */
        & >  .swiper-container {
            flex-basis: 60%;
            border-radius: 27px;
            margin-bottom: 20px;

            @media (max-width: 900px) {
                width: 100%;
                margin-bottom: 20px;
            }
        }

        & > .swiper-slide {
            height: 100%;

            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
    }

    body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${props => props.theme.colors.fontColor};
    }
`

export default GlobalStyle