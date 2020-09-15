import React from 'react'
import {useDispatch} from 'react-redux'

import {ButtonStyle} from './buttonStyle'

const Button = (props) => {
    const dispatch = useDispatch();

    return (
        <ButtonStyle onClick={() => dispatch(props.actionFunc(props.email, props.password))}>{props.text}</ButtonStyle>
    )
}

export default Button