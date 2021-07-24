import React from 'react';
import {BrowserRouter,Switch, Route } from 'react-router-dom';

import Home from './view/Home';
import Inscreva from './view/Inscreva';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/home'  component={Home}/>
                <Route path='/' exact component={Inscreva}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;