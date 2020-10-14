import React from 'react'
import {NavLink} from 'react-router-dom'
import {ButtonStyle} from './buttonStyle'

export const ButtonReg = () => {
    return (
        <ButtonStyle className='registration'><NavLink to='/registration'>Регистрация</NavLink></ButtonStyle>
    )
}
