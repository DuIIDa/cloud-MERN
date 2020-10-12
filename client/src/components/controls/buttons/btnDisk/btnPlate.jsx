import React from 'react';
import {useDispatch} from 'react-redux'

import {BtnGrid} from './btnStyle'

import {setView} from '../../../../actions/internalization'

export const BtnPlateGrid = () => {  
    const dispatch = useDispatch()

    return (
        <BtnGrid onClick={() => dispatch(setView('plate'))} className='plate'></BtnGrid>
    )
}