import React from 'react'
import {NavLink} from 'react-router-dom'
import {ButtonStyle} from './buttonStyle'

export const ButtonEnter = () => {
    return (
        <NavLink to='/login'><ButtonStyle className='enter'>Войти</ButtonStyle></NavLink>
    )
}
