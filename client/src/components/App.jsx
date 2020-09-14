import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import Navbar from './block/navbar/navbar'
import Registration from './block/registration/registration'

import GlobalStyle from './GlobalStyles'



function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <GlobalStyle></GlobalStyle>
                <div className="App">
                    <Navbar></Navbar>
                    <Switch>
                        <Route path='/registration' component={Registration}></Route>
                    </Switch>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
