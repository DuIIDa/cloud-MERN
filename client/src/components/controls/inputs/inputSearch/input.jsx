import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {InputSearch} from './inputStyle'

import {searchFiles, getFiles, showLoader} from '../../../../actions/index'

export const Input = () => {
    const [searchName, setSeatchName] = useState('')
    const [searchTimeout, setsearchTimeout] = useState(false)
    const dispatch = useDispatch()
    const currentDir = useSelector(state=> state.files.currentDir)

    const searchChangeHandler = (e) => {
        setSeatchName(e.target.value)
        dispatch(showLoader())
        if(searchTimeout !== false){
            clearTimeout(searchTimeout)
        }
        if(e.target.value !== ''){
            setsearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value))
            }, 1000, e.target.value))
        }else {
            dispatch(getFiles(currentDir.id))
        }
    }

    return (
        <InputSearch 
            onChange={searchChangeHandler}
            value={searchName} 
            type='text' 
            placeholder='Название файла...'>
        </InputSearch>
    )
}