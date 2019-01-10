import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory as history} from 'react-router';
import routes from './routes'
import App from './Components/App/App.jsx';

ReactDOM.render(
  <App/>  , document.getElementById('app')
);

//<Router routes={routes} history={history} />