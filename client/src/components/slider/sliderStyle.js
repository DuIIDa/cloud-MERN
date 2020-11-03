import styled from 'styled-components'

import slideOne from '../../assets/img/slider/artLogin.jpg'
import slideTwo from '../../assets/img/slider/reliability.png'
import slideThree from '../../assets/img/slider/development.png'


export  const Slide = styled.div`
    padding: 40px;
    width: 100%;
    height: 60vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    text-align: start;

    & > span {
        font-size: 24px;
        font-weight: bold;
    }

    &.one {
        background-image: url(${slideOne });
        color: rgb(11,66,140);
    }

    &.two {
        background-image: url(${slideTwo });
        background-size: contain;
        color: 	#ffcc00;
    }

    &.three {
        background-image: url(${slideThree });
        background-size: contain;
        color: #ffbf00;
    }



`