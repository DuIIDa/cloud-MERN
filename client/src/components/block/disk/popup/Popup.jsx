import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {setPopupDisplay, createDir} from '../../../../actions/index'

import {PopupBlock, PopupContent, PopupHeader,
    PopupClose, PopupButton} from './PopupStyle'

import Input from '../../../controls/inputs/inputsForm/input'


export const Popup = () => {
    const [dirName, setDirName] = useState('')
    const currentDir = useSelector(state=> state.files.currentDir)
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const dispatch = useDispatch()

    const createDirHendler = () => {
        dispatch(createDir(currentDir.id, dirName))
        setDirName('')
        dispatch(setPopupDisplay('none'))
    }

    return (
        <PopupBlock onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <PopupContent onClick={(event => event.stopPropagation())}>
                <PopupHeader>
                    <h3>Создание новой папки</h3>
                    <PopupClose onClick={() => dispatch(setPopupDisplay('none'))}>X</PopupClose>
                </PopupHeader>

                <Input type='text' value={dirName} 
                setValue={setDirName} placeholder='Ввидетие имя новой папки...'></Input>
                
                <PopupButton onClick ={() => createDirHendler()}>Создать</PopupButton>
            </PopupContent>
        </PopupBlock>
    )
}