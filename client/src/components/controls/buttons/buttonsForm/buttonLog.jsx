import React from 'react'
import {useDispatch} from 'react-redux'
import {loginFunc} from '../../../../actions/index'

import {ButtonStyle} from './buttonStyle'

const Button = ({disabled, emailOrLogin, password, staySystem}) => {
    const dispatch = useDispatch();

    return (
        <ButtonStyle disabled={disabled} onClick={() => dispatch(loginFunc(emailOrLogin, password, staySystem))}>Вход</ButtonStyle>
    )
}

export default Button