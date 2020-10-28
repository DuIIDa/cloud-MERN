import React, {useState} from 'react';

import Input from '../../controls/inputs/inputsForm/input'
import ButtonLog from '../../controls/buttons/buttonsForm/buttonLog'
import {Container} from '../../Container'

import {FormBlock, Title} from './loginStyle'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState(false)

    return (
        <Container>
            <FormBlock>
                <Title>Вход</Title>
                <Input value={email} setValue={setEmail} placeholder='Email' type='text'></Input>
                <Input value={password} setValue={setPassword} placeholder='Password' type='password'></Input>
                <input type='checkbox' onClick={e => setCheckBox(e.target.checked)}></input>Остаться в системе
                <div>
                    <ButtonLog email={email} password={password} staySystem={checkBox}></ButtonLog>
                </div>
            </FormBlock>      
        </Container>
    )
}

export default Login