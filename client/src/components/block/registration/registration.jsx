import React, {useState} from 'react';

import {Input} from '../../controls/inputs/index'
import ButtonReg from '../../controls/buttons/buttonsForm/buttonReg'
import {Container} from '../../Container'

import {FormBlock, Title} from './registrationStyle'



const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <FormBlock onSubmit={e => e.preventDefault()}>
                <Title>Регистрация</Title>
                <Input 
                    value={email} 
                    setValue={setEmail}
                    placeholder='Email' 
                    type='text'>
                </Input>
                
                <Input 
                    value={password} 
                    setValue={setPassword} 
                    placeholder='Password' 
                    type='password'>
                </Input>
                <div>
                    <ButtonReg email={email} password={password}></ButtonReg>
                </div>
            </FormBlock>      
        </Container>
    )
}

export default Registration