import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter,Route} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import './assets/css/base.css';
import './assets/js/font';

import {Provider} from 'react-redux'
import store from './store/store'

//02
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
