import React, {useState} from 'react';

import {Input} from '../../controls/inputs/input/input'
import ButtonLog from '../../controls/buttons/buttonsForm/buttonLog'

import {FormBlock, Title} from './loginStyle'

import {useInput} from '../../../customHooks/index'


const Login = () => {
    const emailOrLogin = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true, minLength: 6})
    
    const [checkBox, setCheckBox] = useState(false)

    return (
        <FormBlock onSubmit={e => e.preventDefault()}>
            <Title>Вход</Title>

            {(emailOrLogin.isDirty && (emailOrLogin.isEmpty)) && <div style={{color: 'red'}}>{emailOrLogin.textError}</div>}
            <Input 
                value={emailOrLogin.value} 
                name='email'
                onBlur={emailOrLogin.onBlur}
                setValue={emailOrLogin.onChange} 
                placeholder='Email or login' 
                type='text'>
            </Input>

            {(password.isDirty && (password.isEmpty || password.minLength)) && <div style={{color: 'red'}}>{password.textError}</div>}
            <Input 
                value={password.value}
                name='password' 
                onBlur={password.onBlur}
                setValue={password.onChange} 
                placeholder='Password' 
                type='password'> 
            </Input>

            <input type='checkbox' onClick={e => setCheckBox(e.target.checked)}></input>
            <label>Остаться в системе</label>
                
            <div>
                <ButtonLog disabled={emailOrLogin.inputValid || password.inputValid}
                    emailOrLogin={emailOrLogin.value} 
                    password={password.value} 
                    staySystem={checkBox}>
                </ButtonLog>
            </div>
        </FormBlock>      
    )
}

export default Login