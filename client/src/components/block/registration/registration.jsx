import React, {useEffect, useState} from 'react';

import {Input} from '../../controls/inputs/index'
import ButtonReg from '../../controls/buttons/buttonsForm/buttonReg'

import {FormBlock, Title} from './registrationStyle'

import {useInput} from '../../../customHooks/index'

const Registration = () => {
    const [equealPassword, setEquealPassword] = useState(false)

    const login = useInput('', {isEmpty: true, minLength: 3, maxLength: 15, validLogin: true})
    const email = useInput('', {isEmpty: true, validEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 6})
    const repeatPassword = useInput('', {isEmpty: true, minLength: 6})

    useEffect(() => {
        if(!(repeatPassword.isDirty && (repeatPassword.isEmpty || repeatPassword.minLength)) && repeatPassword.value === password.value)
            setEquealPassword(false)
        else 
            setEquealPassword(true)
    }, [password, repeatPassword])

    return (
        <FormBlock onSubmit={e => e.preventDefault()}>
            <Title>Регистрация</Title>

            {
                (login.isDirty && (login.isEmpty || login.minLength || login.maxLength || login.validLogin)) && 
                    <div style={{color: 'red'}}>{login.textError}</div>
            }
            <Input 
                name='login'
                value={login.value} 
                onBlur={login.onBlur}
                setValue={login.onChange} 
                placeholder='Login' 
                type='text'>
            </Input>

            {
                (email.isDirty && (email.isEmpty || email.validEmail)) && 
                    <div style={{color: 'red'}}>{email.textError}</div>
            }
            <Input 
                name='email'
                value={email.value} 
                onBlur={email.onBlur}
                setValue={email.onChange} 
                placeholder='Email' 
                type='text'>
            </Input>
            
            {
                (password.isDirty && (password.isEmpty || password.minLength)) && 
                    <div style={{color: 'red'}}>{password.textError}</div>
            }
            <Input 
                name='password'
                value={password.value}
                onBlur={password.onBlur}
                setValue={password.onChange}  
                placeholder='Password' 
                type='password'>
            </Input>


            {
                (repeatPassword.isDirty && (repeatPassword.isEmpty || repeatPassword.minLength)) &&
                    <div style={{color: 'red'}}>{repeatPassword.textError}</div>
            }
            <Input 
                name='repat-password'
                value={repeatPassword.value}
                onBlur={repeatPassword.onBlur}
                setValue={repeatPassword.onChange}  
                placeholder='Repeat yout password' 
                type='password'>
            </Input>

            {equealPassword ? <div style={{color: 'red'}}>Пароли должны совпадать</div> : null}
            <div>
                <ButtonReg 
                    login={login.value}
                    email={email.value} 
                    password={password.value}
                    disabled={login.inputValid || email.inputValid || password.inputValid || equealPassword}>
                </ButtonReg>
            </div>
        </FormBlock>      
    )
}

export default Registration