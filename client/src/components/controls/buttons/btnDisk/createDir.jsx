import React from 'react';
import { useDispatch } from 'react-redux';

import {Button} from './btnStyle'

import {setPopupDisplay} from '../../../../actions/index'

export const BtnCreateDir = () => {
    const dispatch = useDispatch()

    const showPopupHandler = () => {
        dispatch(setPopupDisplay('flex'))
    }

    return (
        <Button onClick={()=> showPopupHandler()}>
            Создать новую папку
        </Button>
    )
}