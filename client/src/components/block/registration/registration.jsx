import React, {useState} from 'react';

import Input from '../../controls/inputs/inputsForm/input'
import ButtonReg from '../../controls/buttons/buttonsForm/buttonReg'
import {Container} from '../../Container'

import {FormBlock, Title} from './registrationStyle'

import {registration} from '../../../actions/index'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <FormBlock>
                <Title>Регистрация</Title>
                <Input value={email} setValue={setEmail} placeholder='Email' type='text'></Input>
                <Input value={password} setValue={setPassword} placeholder='Password' type='password'></Input>
                <div>
                    <ButtonReg text='Регистрация' email={email} password={password} actionFunc={registration}></ButtonReg>
                </div>
            </FormBlock>      
        </Container>
    )
}

export default Registration