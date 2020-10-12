import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import dirLogo from '../../../../../assets/img/dir.svg'
import fileLogo from '../../../../../assets/img/file.svg'

import {setCurrentDir, pushToStack} from '../../../../../actions/index'

import {ImgList, FileBoxList, FileNameList, 
    FileDate, FileSize, BtnBox,
    FileBoxPlate, ImgPlate, FileNamePlate} from './fileStyle'

import {ButtonDownload, ButtonDeleted} from '../../../../controls/buttons/btnFile/index'

import formatSize from './fileFormat'

const File  = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)

    const openDirHandler = () => {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir({
            id: file._id,
            path: file.path
        }))

    }

    // ПОКАЗ ФАЙЛОВ
    if(fileView === 'list') {
        return (
            <FileBoxList onClick={file.type === 'dir' ? () => openDirHandler() : null}>
                <ImgList src={file.type === 'dir' ? dirLogo : fileLogo}></ImgList>
                <FileNameList>{file.name}</FileNameList>
                <FileDate>{file.date.slice(0, 10)}</FileDate>
                <FileSize>{formatSize(file.size)}</FileSize> 
    
                <BtnBox>
                    {file.type !== 'dir' && <ButtonDownload file={file}></ButtonDownload>}
                        
                    <ButtonDeleted file={file}></ButtonDeleted>
                </BtnBox>
            </FileBoxList>
        )
    } else if(fileView === 'plate') {
        return (
            <FileBoxPlate onClick={file.type === 'dir' ? () => openDirHandler() : null}>
                <ImgPlate src={file.type === 'dir' ? dirLogo : fileLogo}></ImgPlate>
                <FileNamePlate>{file.name}</FileNamePlate>
    
                <BtnBox>
                    {file.type !== 'dir' && <ButtonDownload file={file}></ButtonDownload>}
                        
                    <ButtonDeleted file={file}></ButtonDeleted>
                </BtnBox>
            </FileBoxPlate>
        )
    }
}

export default File