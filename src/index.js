import './index.css'
import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import App from './App'
import App2 from './App2'
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact>
                <App/>
            </Route>
            <Route path="/2" exact>
                <App2/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')   
)