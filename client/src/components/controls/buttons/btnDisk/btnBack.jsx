import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {setCurrentDir} from '../../../../actions/index'

import arrowBack from '../../../../assets/img/btnBack.svg'
import {Button} from './btnStyle'

export const BtnBack = () => {
    const dispatch = useDispatch()
    const dirStack = useSelector(state=> state.files.dirStack)

    const backHandler = () => {
        const backDir = dirStack.pop() // Получем последний элемент
        dispatch(setCurrentDir(backDir))
    }

    return (
        <Button onClick={dirStack.length!==0 ? backHandler : null}>
            <img src={arrowBack} alt = 'Back'/>
        </Button>
    )
}
