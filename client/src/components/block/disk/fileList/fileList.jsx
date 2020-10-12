import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import File from './file/file'
import {FileListContainer, FileListHeader, FileListName, FileListDate
    ,FileListSize, ImgBlock, FilePlateContainer} from './fileListStyle'

import emptyDirPath from '../../../../assets/img/emptyDir.svg'

const FileList  = () => {

    const [sort, setSort] = useState({
        direction: 'name',
        order: -1
    })
    const files = useSelector(state => state.files.files)
    const fileView = useSelector(state => state.files.view)

    // СОРТИРОВКА
    const sorting = (direction) => {
        if(sort.direction !== direction) {
            setSort({
                ...sort,
                direction: direction,
                order: -1
            })
        }else {
            setSort({
                ...sort,
                direction: direction,
                order: -sort.order
            })
        }
    }

    // ФУНКЦИЯ ПРИ СОРИТРОВКЕ
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

    // ЕСЛИ ПАПКА ПУСТА
    if(files.length === 0) {
        return (
            <ImgBlock>
                <img src={emptyDirPath} alt='Img not found'></img>
                <p>Эта папка пуста!</p>
            </ImgBlock>
        )
    }

    // ВЫВОД ФАЙЛОВ В РАЗНЫХ СЕТКАХ
    if(fileView === 'list') {
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
    } else if(fileView === 'plate'){
        return (
            <FilePlateContainer>
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
            </FilePlateContainer>
        )
    }

    
}

export default FileList