import React from 'react';

import deletedLogo from '../../../../assets/img/fileBtn/deleted.svg'

import {ImgBtn, ButtonImg} from './indexStyle'


export const ButtonDeleted  = () => {

    return (
        <ButtonImg>
            <ImgBtn src={deletedLogo} alt='Deleted'></ImgBtn>
        </ButtonImg>
    )
}
