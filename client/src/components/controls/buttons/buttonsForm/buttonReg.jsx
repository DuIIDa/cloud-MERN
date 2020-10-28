import React from 'react'
import { useDispatch } from 'react-redux';

import {registration} from '../../../../actions/index'

import {ButtonStyle} from './buttonStyle'

const Button = (props) => {
    const dispatch = useDispatch()

    return (
        <ButtonStyle onClick={() => dispatch(registration(props.email, props.password))}>Регистрация</ButtonStyle>
    )
}

export default Button