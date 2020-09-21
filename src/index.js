import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Headline from './components/home/index';
import Login from './components/login/index';

import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
     
      <Route exact path="/" component={App}/>
      <Route path="/Home" component={Headline}/>
      <Route path="/login" component={Login}/>
    </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
