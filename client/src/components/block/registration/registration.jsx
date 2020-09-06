import React, {useState} from 'react';
import Input from '../../controls/inputs/inputsForm/input'
import Button from '../../controls/buttons/buttonsForm/button'
import {Container} from '../../Container'
import {RegBlock, Title} from './registrationStyle'


const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <RegBlock>
                <Title>Регистрация</Title>
                <Input value={email} setValue={setEmail} placeholder='Email' type='text'></Input>
                <Input value={password} setValue={setPassword} placeholder='Password' type='password'></Input>
                <div>
                    <Button text='Регистрация' email={email} password={password}></Button>
                </div>
            </RegBlock>      
        </Container>
    )
}

export default Registration