import React from 'react';
import { useSelector } from 'react-redux';

import File from './file/file'
import {FileListContainer, FileListHeader, FileListName, FileListDate
    ,FileListSize} from './fileListStyle'

const FileList  = () => {

    const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file}></File>)

    return (
        <FileListContainer>
            <FileListHeader>
                <FileListName>Название</FileListName>
                <FileListDate>Дата</FileListDate>
                <FileListSize>Размер</FileListSize>
            </FileListHeader>

            {files}
        </FileListContainer>
    )
}

export default FileList