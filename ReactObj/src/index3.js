import React from 'react';
import ReactDOM from 'react-dom';
import App from './redux/App';

// import * as redux from 'redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// console.log(redux);
// redux.createStore()

import defaultState from './redux/state';
import {reducer} from './redux/reducer'

const store = createStore(reducer,defaultState);

import registerServiceWorker from './registerServiceWorker';
//02
ReactDOM.render(
  <Provider store={store}>
    <App title={110}></App>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
