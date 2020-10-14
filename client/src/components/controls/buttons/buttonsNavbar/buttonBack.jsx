import React from 'react'
import { useDispatch } from 'react-redux'

import {ButtonStyle} from './buttonStyle'

import {logout} from '../../../../actions/index'

export const ButtonBack = () => {
    const dispatch = useDispatch()

    return (
        <ButtonStyle className='back' onClick={() => dispatch(logout())}>Выход</ButtonStyle>
    )
}
