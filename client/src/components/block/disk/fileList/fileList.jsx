import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import File from './file/file'
import {FileListContainer, FileListHeader, FileListName, FileListDate
    ,FileListSize} from './fileListStyle'

const FileList  = () => {

    const [sort, setSort] = useState({
        direction: 'name',
        order: -1
    })
    const files = useSelector(state => state.files.files)
    
    const sorting = (direction) => {
        setSort({
            ...sort,
            direction: direction,
            order: -sort.order
        })
    }

    const compare = (a, b) => {
        let elemOne = a[sort.direction]
        let elemTwo = b[sort.direction]
        if(sort.direction !== 'size') {
            elemOne = a[sort.direction].toLowerCase()
            elemTwo = b[sort.direction].toLowerCase()
        }
        if(elemOne < elemTwo)
            return sort.order
        else if(elemOne > elemTwo)
            return -sort.order
        return 0
    }

    return (
        <FileListContainer>
            <FileListHeader>
                <FileListName onClick={() => sorting('name')}>Название</FileListName>
                <FileListDate onClick={() => sorting('date')}>Дата</FileListDate>
                <FileListSize onClick={() => sorting('size')}>Размер</FileListSize>
            </FileListHeader>

                {
                    files.filter(file => file.type === 'dir')
                        .sort(compare)
                        .map(file => <File key={file._id} file={file}></File>)
                }
                {
                    files.filter(file => file.type !== 'dir')
                        .sort(compare)
                        .map(file => <File key={file._id} file={file}></File>)
                }
        </FileListContainer>
    )
}

export default FileList