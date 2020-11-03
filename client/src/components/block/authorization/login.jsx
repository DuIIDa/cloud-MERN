import React, {useState} from 'react';

import {Input} from '../../controls/inputs/input/input'
import ButtonLog from '../../controls/buttons/buttonsForm/buttonLog'

import {LoginContainer, FormBlock} from './loginStyle'

import {useInput} from '../../../customHooks/index'

import SimpleSlider from '../../slider/Slider' 



const Login = () => {

    const emailOrLogin = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true, minLength: 6})
    
    const [checkBox, setCheckBox] = useState(false)

    return (
        <LoginContainer>
            <h1 className='title'>MERN-CLOUD...</h1>
            <p className='text-info'>MERN-CLOUD — новое кроссбраузерное облачное хранилище разработанное специально для курсового проекта. Оно поддерживает все основные брузеры. Сервис очень прост в применении, работает быстро и стабильно.</p>
            <div className='content-block'>

                <SimpleSlider></SimpleSlider>
            
                <FormBlock onSubmit={e => e.preventDefault()}>
                    <h3 className='title'>Автозирация</h3>

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

                    <div className='blok-stay-system'>
                        <input className='blok-stay-system__checkbox' type='checkbox' name='staySystem' onClick={e => setCheckBox(e.target.checked)}></input>
                        <label name='staySystem'>Остаться в системе</label>
                    </div>
                        
                    <div className="btn-login">
                        <ButtonLog disabled={emailOrLogin.inputValid || password.inputValid}
                            emailOrLogin={emailOrLogin.value} 
                            password={password.value} 
                            staySystem={checkBox}>
                        </ButtonLog>
                    </div>
                </FormBlock>    
            </div> 
        </LoginContainer> 
    )
}

export default Login