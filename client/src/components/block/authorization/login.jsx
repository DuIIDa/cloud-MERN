import React, {useState} from 'react';

import Input from '../../controls/inputs/inputsForm/input'
import ButtonLog from '../../controls/buttons/buttonsForm/buttonLog'
import {Container} from '../../Container'

import {FormBlock, Title} from './loginStyle'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <FormBlock>
                <Title>Вход</Title>
                <Input value={email} setValue={setEmail} placeholder='Email' type='text'></Input>
                <Input value={password} setValue={setPassword} placeholder='Password' type='password'></Input>
                <div>
                    <ButtonLog email={email} password={password}></ButtonLog>
                </div>
            </FormBlock>      
        </Container>
    )
}

export default Login