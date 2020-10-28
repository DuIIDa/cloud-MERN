import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../../../actions/index'

import {ButtonStyle} from './buttonStyle'

const Button = (props) => {
    const dispatch = useDispatch();

    return (
        <ButtonStyle onClick={() => dispatch(login(props.email, props.password))}>Вход</ButtonStyle>
    )
}

export default Button