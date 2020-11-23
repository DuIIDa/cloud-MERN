import React from 'react'
import {NavLink} from 'react-router-dom'
import {ButtonStyle} from './buttonStyle'

export const ButtonReg = () => {
    return (
        <NavLink to='/registration'><ButtonStyle className='registration'>Регистрация</ButtonStyle></NavLink>
    )
}
