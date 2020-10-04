import React from 'react';
import { useDispatch } from 'react-redux'

import deletedLogo from '../../../../assets/img/fileBtn/deleted.svg'

import {ImgBtn, ButtonImg} from './indexStyle'

import {deleteFile} from '../../../../actions/index'

export const ButtonDeleted  = ({file}) => {
    const dispatch = useDispatch()

    const deleteClickHeandler = (event) => {
        event.stopPropagation()
        dispatch(deleteFile(file))
    }

    return (
        <ButtonImg onClick={deleteClickHeandler}>
            <ImgBtn src={deletedLogo} alt='Deleted'></ImgBtn>
        </ButtonImg>
    )
}
