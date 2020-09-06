import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './block/navbar/navbar'
import Registration from './block/registration/registration'

import GlobalStyle from './GlobalStyles'



function App() {
    return (
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <div className="App">
                <Navbar></Navbar>

                <Switch>
                    <Route path='/registration' component={Registration}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
