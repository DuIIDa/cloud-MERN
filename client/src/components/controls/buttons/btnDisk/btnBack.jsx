import React from 'react';

import arrowBack from '../../../../assets/img/btnBack.svg'
import {Button} from './btnStyle'

export const BtnBack = () => {

    return (
        <Button>
            <img src={arrowBack}/>
        </Button>
    )
}
