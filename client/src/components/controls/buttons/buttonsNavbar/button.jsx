import React from 'react'
import {NavLink} from 'react-router-dom'
import {ButtonStyle} from './buttonStyle'

const Button = (props) => {
    return (
        <ButtonStyle><NavLink to={props.to}>{props.text}</NavLink></ButtonStyle>
    )
}

export default Button