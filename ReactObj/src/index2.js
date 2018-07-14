import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//02
import './assets/css/base.css';
import './assets/js/font';
import {BrowserRouter,Route} from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <Route component={App}/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

registerServiceWorker();
