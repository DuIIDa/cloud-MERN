import React from 'react'
import { useDispatch } from 'react-redux'
import {ButtonStyle} from './buttonStyle'

const ButtonBack = (props) => {
    const dispatch = useDispatch()

    return (
        <ButtonStyle onClick={() => dispatch(props.logOut())}>{props.text}</ButtonStyle>
    )
}

export default ButtonBack