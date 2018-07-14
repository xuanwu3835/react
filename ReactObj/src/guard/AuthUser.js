import React from 'react';
import {Route,Redirect} from 'react-router-dom';
// import {asyncAction} from "../store/asyncAction";
import {connect} from "react-redux";

const AuthUser=({component:Component,user,...rest})=> {
  console.log(user);
  return <Route {...rest} render={(props) => (
    user.auth ?
      <Component {...props} data={user.data}/> :
      <Redirect to="/login"/>
  )}/>
};

const mapStateToProps=state=>({
  user:state.user
});
const mapDispatchToProps=dispatch=>({});


export default connect(mapStateToProps,mapDispatchToProps)(AuthUser);
