import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../../../actions/index'

import {ButtonStyle} from './buttonStyle'

const Button = ({email, password, staySystem}) => {
    const dispatch = useDispatch();

    return (
        <ButtonStyle onClick={() => dispatch(login(email, password, staySystem))}>Вход</ButtonStyle>
    )
}

export default Button