import React, {useEffect, useState} from 'react';

import {Input} from '../../controls/inputs/index'
import ButtonReg from '../../controls/buttons/buttonsForm/buttonReg'

import {RegistrationContainer, FormBlock, InputBlock, ErrorBlock} from './registrationStyle'

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
        <RegistrationContainer>
            <div className='content-block'>

                <p className='text-info'>
                    &nbsp;&nbsp;&nbsp;&nbsp;MY-CLOUD – это сервис хранения объектов, предлагающий лучшие в отрасли показатели масштабируемости, доступности и безопасности данных. В основе, нашими клиентами являются обычные люди. Они могут использовать наш сервис для хранения и защиты любых объемов данных в различных ситуациях. MY-CLOUD обеспечивает надежность 99,999999999 % (здесь 11 девяток) и хранит данные со всего света(С моего компьютера).
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Регистрируйтесь и становитесь частью нас!
                </p>


                <FormBlock onSubmit={e => e.preventDefault()}>
                    <h3 className='title'>Регистрация</h3>

                    <InputBlock>
                        {
                            (login.isDirty && (login.isEmpty || login.minLength || login.maxLength || login.validLogin)) && 
                                <ErrorBlock>{login.textError}</ErrorBlock>
                        }
                        <Input 
                            name='login'
                            value={login.value} 
                            onBlur={login.onBlur}
                            setValue={login.onChange} 
                            placeholder='Login' 
                            type='text'>
                        </Input>
                    </InputBlock>
                    
                    <InputBlock>
                        {
                            (email.isDirty && (email.isEmpty || email.validEmail)) && 
                                <ErrorBlock>{email.textError}</ErrorBlock>
                        }
                        <Input 
                            name='email'
                            value={email.value} 
                            onBlur={email.onBlur}
                            setValue={email.onChange} 
                            placeholder='Email' 
                            type='text'>
                        </Input>
                    </InputBlock>
                    
                    <InputBlock>
                        {
                            (password.isDirty && (password.isEmpty || password.minLength)) && 
                                <ErrorBlock>{password.textError}</ErrorBlock>
                        }
                        <Input 
                            name='password'
                            value={password.value}
                            onBlur={password.onBlur}
                            setValue={password.onChange}  
                            placeholder='Password' 
                            type='password'>
                        </Input>
                    </InputBlock>


                    <InputBlock>
                        {
                            (repeatPassword.isDirty && (repeatPassword.isEmpty || repeatPassword.minLength)) &&
                                <ErrorBlock>{repeatPassword.textError}</ErrorBlock>
                        }
                        <Input 
                            name='repat-password'
                            value={repeatPassword.value}
                            onBlur={repeatPassword.onBlur}
                            setValue={repeatPassword.onChange}  
                            placeholder='Repeat password' 
                            type='password'>
                        </Input>
                    </InputBlock>
                    

                    <InputBlock>
                        {equealPassword ? <ErrorBlock>Пароли должны совпадать!</ErrorBlock> : null}
                        <div className='btn-registration'>
                            <ButtonReg 
                                login={login.value}
                                email={email.value} 
                                password={password.value}
                                disabled={login.inputValid || email.inputValid || password.inputValid || equealPassword}>
                            </ButtonReg>
                        </div>
                    </InputBlock>
                </FormBlock>  
            </div>

        </RegistrationContainer> 
    )
}

export default Registration