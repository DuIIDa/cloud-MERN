import styled from 'styled-components'
import bgPuth from '../assets/img/bg.jpg'


export const BgContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bgPuth});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-width: 400px;
    box-shadow: 0px 45px 25px -5px rgba(255, 255, 255, 1),
        0px -47px 25px -5px rgba(255, 255, 255, 1) inset;
    
    
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    min-width: 400px;
    padding: 10px 80px;
    background: ${props => props.theme.colors.writeContainer};
    box-shadow: 0px 14px 9px 9px rgba(34, 60, 80, 0.27);
    @media (max-width: 500px) {
        padding: 10px 15px;
    }
`