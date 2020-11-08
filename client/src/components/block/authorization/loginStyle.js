import styled from 'styled-components'


export const LoginContainer = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    margin-top: 10px;

    background-color: ${props => props.theme.colors.whiteContainer};
    box-shadow: 0px 20px 36px 0px rgba(34, 60, 80, 0.5);
    border-radius: 10px;

    padding: 20px 50px 50px 50px;

    & > .title {
        text-align: center;
        margin-bottom: 10px;
    }

    & > .text-info {
        font-size: 18px;
    }

    & > .content-block {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        margin-top: 20px;

        @media (max-width: 900px) {
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
    flex-basis: 35%;
    width: 100%;
    background: ${props => props.theme.colors.white};
    border-radius: 27px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 25px 33px 17px 33px;

    & > .title {
            text-align: start;
            font-size: 28px;
            line-height: 33px;
            margin-bottom: 17px;
    }

    & > .blok-stay-system {
        text-align: start;

        & > .blok-stay-system__checkbox {
            margin-right: 10px;
            margin-bottom: 20px;
        }
    }

    & > .btn-login {
        text-align: end;
    }

    @media (max-width: 900px) {
        box-shadow: 0px 20px 36px 0px rgba(34, 60, 80, 0.5);
    }
`

export const InputBlock = styled.div`
    position: relative;
    margin-bottom: 24px;
`

export const ErrorBlock  = styled.div`
    position: absolute;
    top: -20px;
    text-align: start;
    color: red;
`

