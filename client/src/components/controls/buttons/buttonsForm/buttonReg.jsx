import React from 'react'

import {ButtonStyle} from './buttonStyle'

const Button = (props) => {
    
    return (
        <ButtonStyle onClick={() => props.actionFunc(props.email, props.password)}>{props.text}</ButtonStyle>
    )
}

export default Button