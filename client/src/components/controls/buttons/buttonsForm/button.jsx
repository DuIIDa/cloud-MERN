import React from 'react'
import {ButtonStyle} from './buttonStyle'

import {registration} from '../../../../actions/user'

const Button = (props) => {
    return (
        <ButtonStyle onClick={() => registration(props.email, props.password)}>{props.text}</ButtonStyle>
    )
}

export default Button