export default (state,action)=>{
  let {type,payload}=action;
  switch (type){
    case 'VIEW_NAV':
      return Object.assign({},state, {bNav:payload});
    case 'VIEW_FOOT':
      return Object.assign({},state, {bFoot:payload});
    case 'VIEW_LOADING':
      return Object.assign({},state, {bLoading:payload});
    case 'UPDATE_HOME':
      return Object.assign({},state, {homeData:payload});
    case 'UPDATE_FOLLOW':
      return Object.assign({},state, {followData:payload});
    case 'UPDATE_USER':
      return Object.assign({},state, {user:payload});
    default:
      return state;
  }
}