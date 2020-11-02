import React, { useEffect } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.compat.css'

import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import {Container, BgContainer} from './Containers'
import Navbar from './block/navbar/navbar'
import Registration from './block/registration/registration'
import Login from './block/authorization/login'
import Disk from './block/disk/disk';

import {REG, LOG} from '../constants/index'
import {auth} from '../actions/index'

import GlobalStyle from './GlobalStyles'



function App() {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        (localStorage.getItem('token') || sessionStorage.getItem('token')) && dispatch(auth())

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <BrowserRouter>
        <ReactNotification></ReactNotification>
            <BgContainer>
            <ThemeProvider theme={theme}>
            <GlobalStyle></GlobalStyle>
                <div className="App">
                        <Navbar></Navbar>

                        {!isAuth ?
                            <Switch>
                                <Route path={REG} component={Registration}></Route>
                                <Route path={LOG} component={Login}></Route>
                                <Redirect to={LOG}></Redirect>
                                {/*
                                    Если пользователь не сущ URL
                                    Тогда бдует вызва Redirect c маршрутом
                                */}
                            </Switch>
                            :
                            <Switch>
                                <Container>
                                    <Route exact path='/' component={Disk}></Route>
                                    <Redirect to='/'></Redirect>
                                </Container>
                                
                            </Switch>
                        }
                    
                </div>
            </ThemeProvider>
            </BgContainer>
        </BrowserRouter>
    );
}

export default App;
