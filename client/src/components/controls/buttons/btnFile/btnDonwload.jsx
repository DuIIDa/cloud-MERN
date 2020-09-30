import React from 'react';

import downloadLogo from '../../../../assets/img/fileBtn/download.svg'

import {ImgBtn, ButtonImg} from './indexStyle'

import {downloadFile} from '../../../../actions/index'

export const ButtonDownload = ({file}) => {
   
    const downloadClickHeandler = (event) => {
        event.stopPropagation()
        downloadFile(file)
    }

    return (
        <ButtonImg onClick={downloadClickHeandler}>
            <ImgBtn src={downloadLogo} alt='Dowload'></ImgBtn>
        </ButtonImg>
    )
}
