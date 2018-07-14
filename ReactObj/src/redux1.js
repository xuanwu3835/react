import React from 'react';
import ReactDOM from 'react-dom';
import App from './redux/App';

// import * as redux from 'redux';
import {createStore} from 'redux';

// console.log(redux);
// redux.createStore()

const defaultStore={
  todolist:['asdf'],
};

const reducer = (state,action) => {
  console.log('reducer',state,action);

  let {type,payload}=action;

  switch (type){
    case "ADD_ITEM":
      //业务处理,并返回 copy 后的 state状态
      return Object.assign({},state, {todolist:state.todolist.concat(payload)});
  }

  return state;

};

const store = createStore(reducer,defaultStore);

import registerServiceWorker from './registerServiceWorker';
//02
ReactDOM.render(
  <App store={store}></App>
  ,
  document.getElementById('root')
);

registerServiceWorker();
