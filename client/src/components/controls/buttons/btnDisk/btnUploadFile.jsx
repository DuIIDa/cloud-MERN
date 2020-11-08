import React from 'react';

import { useDispatch,  useSelector } from 'react-redux';

import { uploadFile } from '../../../../actions';
import {DiskUpload, InputFile, LabelFile} from './btnStyle'

export const BtnUploadFile = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state=> state.files.currentDir)

    const fileUploadHandler = (event) => {
        const files = [...event.target.files]
        files.forEach((file) => dispatch(uploadFile(file, currentDir.id)))
    }


    return (
        <DiskUpload>
            <LabelFile htmlFor='disk__upload-input'>Загрузить файл</LabelFile>
            <InputFile multiple={true} onChange={(event) => fileUploadHandler(event)} type='file' id='disk__upload-input'></InputFile>
        </DiskUpload>
    )
}