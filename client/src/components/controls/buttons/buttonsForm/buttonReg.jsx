import React from 'react'
import { useDispatch } from 'react-redux';

import {registration} from '../../../../actions/index'

import {ButtonStyle} from './buttonStyle'

const Button = ({login, email, password, disabled}) => {
    const dispatch = useDispatch()

    return (
        <ButtonStyle disabled={disabled} onClick={() => dispatch(registration(login, email, password))}>Регистрация</ButtonStyle>
    )
}

export default Button