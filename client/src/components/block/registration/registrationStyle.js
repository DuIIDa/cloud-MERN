import styled from 'styled-components'
import bordImg from '../../../assets/img/artRegistration.png'

export const RegistrationContainer = styled.div`
    max-width: 1140px;
    min-height: 80%;
    margin: 0 auto;

    margin-top: 10px;

    background-color: ${props => props.theme.colors.whiteContainer};
    box-shadow: 0px 20px 36px 0px rgba(34, 60, 80, 0.5);
    border-radius: 10px;

    padding: 20px 50px 0px 50px;

    & > .content-block {
        margin: 0 auto;
        min-height: 80vh;
        
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        background-image: url(${bordImg});
        background-repeat: no-repeat;
        background-position: center -100px;
        background-size: cover;

        margin-top: 20px;

        & > .text-info {
            font-size: 18px;
            flex-basis: 40%;
            margin-bottom: 30px;
        }

        @media (max-width: 900px) {
            justify-content: flex-start;
            margin-bottom: 15px;
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 900px) {
        margin: 10px 10px;
    }

    @media (max-width: 500px) {
        padding: 20px 10px 20px 10px;
    }

`



export const FormBlock = styled.form`
    flex-basis: 50%;
    width: 100%;
    background: ${props => props.theme.colors.white};
    border-radius: 27px;
    text-align: flex-start;
    display: flex;
    flex-direction: column;
    padding: 25px 33px 17px 33px;
    box-shadow: 0px 20px 36px 0px rgba(34, 60, 80, 0.5);

    & > .title {
            font-size: 28px;
            line-height: 33px;
            margin-bottom: 17px;
    }

`

export const InputBlock = styled.div`
    position: relative;
    margin-bottom: 24px;

    & > .btn-registration {
        text-align: end;
    }
`

export const ErrorBlock  = styled.div`
    position: absolute;
    top: -20px;
    text-align: start;
    color: red;
`