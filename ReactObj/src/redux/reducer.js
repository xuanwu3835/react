export const reducer = (state,action) => {
  console.log('reducer',state,action);

  let {type,payload}=action;

  switch (type){
    case "ADD_ITEM":
      //业务处理,并返回 copy 后的 state状态
      return Object.assign({},state, {todolist:state.todolist.concat(payload)});
  }

  return state;

};