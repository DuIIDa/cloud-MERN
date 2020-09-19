import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getFiles} from '../../../actions/index'

import {DiskHeadContainer, Title, BtnBlock} from './diskStyle'
import {BtnBack, BtnCreateDir} from '../../controls/buttons/btnDisk/index'
import FileLIst from './fileList/fileList'

const Disk  = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state=> state.files.currentDir)
    
    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])
    
    return (
        <div>
            <Title>Title</Title>
            <DiskHeadContainer>
                
                <BtnBlock>
                    <BtnBack></BtnBack>
                    <BtnCreateDir></BtnCreateDir>
                </BtnBlock>

            </DiskHeadContainer>

            <FileLIst></FileLIst>
        </div>
    )
}

export default Disk