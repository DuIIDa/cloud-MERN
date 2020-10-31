import React, {useState} from 'react';

import {Input} from '../../controls/inputs/input/input'
import ButtonLog from '../../controls/buttons/buttonsForm/buttonLog'
import {Container} from '../../Container'

import {FormBlock, Title} from './loginStyle'

import {useInput} from '../../../customHooks/index'


const Login = () => {
    const email = useInput('', {isEmpty: true, validEmail: false})
    const password = useInput('', {isEmpty: true, minLength: 3})
    
    const [checkBox, setCheckBox] = useState(false)

    return (
        <Container>
            <FormBlock onSubmit={e => e.preventDefault()}>
                <Title>Вход</Title>

                {(email.isDirty && (email.isEmpty || email.validEmail)) && <div style={{color: 'red'}}>{email.textError}</div>}
                <Input value={email.value} 
                    onBlur={email.onBlur}
                    setValue={email.onChange} 
                    placeholder='Email' 
                    type='text'>
                </Input>

                {(password.isDirty && (password.isEmpty || password.minLength)) && <div style={{color: 'red'}}>{password.textError}</div>}
                <Input value={password.value} 
                    onBlur={password.onBlur}
                    setValue={password.onChange} 
                    placeholder='Password' 
                    type='password'> 
                </Input>

                <input type='checkbox' onClick={e => setCheckBox(e.target.checked)}></input>
                <label>Остаться в системе</label>
                
                <div>
                    <ButtonLog disabled={email.inputValid || password.inputValid}
                         email={email.value} 
                         password={password.value} 
                         staySystem={checkBox}>
                    </ButtonLog>
                </div>
            </FormBlock>      
        </Container>
    )
}

export default Login