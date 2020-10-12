import React from 'react';
import {useDispatch} from 'react-redux'

import {BtnGrid} from './btnStyle'

import {setView} from '../../../../actions/internalization'

export const BtnListGrid = () => {
    const dispatch = useDispatch()

    return (
        <BtnGrid onClick={() => dispatch(setView('list'))} className='list'></BtnGrid>
    )
}