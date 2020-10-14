import React from 'react'
import {NavLink} from 'react-router-dom'
import {ButtonStyle} from './buttonStyle'

export const ButtonEnter = () => {
    return (
        <ButtonStyle className='enter'><NavLink to='/login'>Войти</NavLink></ButtonStyle>
    )
}
