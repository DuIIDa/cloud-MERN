import React, { useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import Navbar from './block/navbar/navbar'
import Registration from './block/registration/registration'
import Login from './block/authorization/login'

import {REG, LOG} from '../constants/index'
import {auth} from '../actions/index'

import GlobalStyle from './GlobalStyles'



function App() {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.getItem('token') && dispatch(auth())
    }, [])

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <GlobalStyle></GlobalStyle>
                <div className="App">
                    <Navbar></Navbar>

                    {!isAuth &&
                        <Switch>
                            <Route path={REG} component={Registration}></Route>
                            <Route path={LOG} component={Login}></Route>
                        </Switch>
                    }
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
