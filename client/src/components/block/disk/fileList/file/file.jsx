import React from 'react';

import dirLogo from '../../../../../assets/img/dir.svg'
import fileLogo from '../../../../../assets/img/file.svg'

import {Img, FileBox, FileName, FileDate, FileSize} from './fileStyle'

const File  = ({file}) => {
    return (
        <FileBox>
            <Img src={file.type === 'dir' ? dirLogo : fileLogo}></Img>
            <FileName>{file.name}</FileName>
            <FileDate>{file.date.slice(0, 10)}</FileDate>
            <FileSize>{file.size}</FileSize>
        </FileBox>
    )
}

export default File