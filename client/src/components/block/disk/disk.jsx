import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getFiles, uploadFile} from '../../../actions'

import {DiskHeadContainer, Title, BtnBlock, DropAria} from './diskStyle'
import {BtnBack, BtnCreateDir, BtnUploadFile, 
    BtnPlateGrid, BtnListGrid} from '../../controls/buttons/btnDisk/index'

import FileLIst from './fileList/fileList'
import { Popup } from './popup/Popup';

import {Loader} from '../../loader/loader'


const Disk  = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state=> state.files.currentDir)
    const loader = useSelector(state=> state.app.loader)

    const [dragEnter,  setDragEnter] = useState(false)

    useEffect(() => {
        dispatch(getFiles(currentDir.id))
    }, [currentDir])// eslint-disable-line react-hooks/exhaustive-deps
    

    const dragEnterHandler = (event) => {
        event.preventDefault()
        setDragEnter(true)
    }
    const dragLeaveHandler = (event) => {
        event.preventDefault()
        setDragEnter(false)
    }
    const dropHandler = (event) => {
        event.preventDefault()
        let files = [...event.dataTransfer.files]
        setDragEnter(false)

        files.forEach(file => dispatch(uploadFile(file, currentDir.id)))
    }

    if(loader) {
        return (
            <Loader></Loader>
        )
    }

    return ( !dragEnter ?
        <div onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <Title>{currentDir.id ? currentDir.path : 'Главная страница'}</Title>
            <DiskHeadContainer>
                <div className = 'test'>
                    <BtnBlock>
                        <BtnBack></BtnBack>
                        <BtnCreateDir></BtnCreateDir>
                    </BtnBlock>

                    <BtnBlock>
                        <BtnUploadFile></BtnUploadFile>
                    </BtnBlock>
                </div>
                <BtnBlock className='btn-grid'>
                    <BtnPlateGrid></BtnPlateGrid>
                    <BtnListGrid></BtnListGrid>
                </BtnBlock>

            </DiskHeadContainer>

            <FileLIst></FileLIst>
            <Popup></Popup>
        </div>

        :

        <DropAria onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Занесите сюда!
        </DropAria>
    )
}

export default Disk