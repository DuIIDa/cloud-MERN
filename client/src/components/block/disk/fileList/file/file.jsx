import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import dirLogo from '../../../../../assets/img/dir.svg'
import fileLogo from '../../../../../assets/img/file.svg'

import {setCurrentDir, pushToStack} from '../../../../../actions/index'

import {Img, FileBox, FileName, 
    FileDate, FileSize, BtnBox,} from './fileStyle'

import {ButtonDownload, ButtonDeleted} from '../../../../controls/buttons/btnFile/index'


const File  = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    const openDirHandler = () => {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir({
            id: file._id,
            path: file.path
        }))

    }


    return (
        <FileBox onClick={file.type === 'dir' ? () => openDirHandler() : null}>
            <Img src={file.type === 'dir' ? dirLogo : fileLogo}></Img>
            <FileName>{file.name}</FileName>
            <FileDate>{file.date.slice(0, 10)}</FileDate>
            <FileSize>{file.size}</FileSize>
            {file.type !== 'dir' && 
                <BtnBox>
                    <ButtonDownload file={file}></ButtonDownload>
                    
                    <ButtonDeleted></ButtonDeleted>
                </BtnBox>
            }
        </FileBox>
    )
}

export default File