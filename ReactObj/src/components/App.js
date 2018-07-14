import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

import {Route,Redirect,Switch} from 'react-router-dom'

import Home from "./Home";
import Follow from "./Follow";
import Column from "./Column";
import User from "./User";
import Login from "./Login";
import Reg from "./Reg";
import Detail from "./Detail";
import Error from "./Error";
import Loading from "./Loading";
import AuthUser from "../guard/AuthUser";

import {connect} from 'react-redux';

class App extends React.Component{

  componentDidMount(){
    this.routerView(this.props.location.pathname)
  }
  componentWillUpdate(){
    this.routerView(this.props.location.pathname)
  }

  routerView(path){
    let {bNav,bFoot,bLoading,viewNav,viewFoot} = this.props;
    console.log(path);
    //修改导航状态
    if (/home|follow|column/.test(path)){
      viewNav(true);viewFoot(true);
      /*setTimeout(()=>{
        viewNav(true);viewFoot(true);
      },0)*/
    }
    if (/login|reg|detail/.test(path)){
      viewNav(false);viewFoot(false);
      /*setTimeout(viewNav, 0,false);
      setTimeout(viewFoot, 0,false);*/
    }
    if (/user/.test(path)){
      console.log('usr.......')
      viewNav(false);viewFoot(true);
      // setTimeout(viewNav, 0,false);
      // setTimeout(viewFoot, 0,true);
    }
  }

  render(){

    /*let path = this.props.location.pathname;
    let {bNav,bFoot,bLoading,viewNav,viewFoot} = this.props;

    //修改导航状态
    if (/home|follow|column/.test(path)){
      setTimeout(()=>{
        viewNav(true);viewFoot(true);
      },0)
    }
    if (/login|reg|detail/.test(path)){
      setTimeout(viewNav, 0,false);
      setTimeout(viewFoot, 0,false);
    }
    if (/user/.test(path)){
      setTimeout(viewNav, 0,false);
      setTimeout(viewFoot, 0,true);
    }*/

    return (
      <React.Fragment>

        {this.props.bLoading && <Loading />}

        {this.props.bNav && <Header/>}

        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/column" component={Column}/>

          {/*<Route path="/user" component={User}/>*/}

          <AuthUser path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:aid" component={Detail}/>
          <Redirect exact from="/" to="/home" />
          <Route component={Error}/>
        </Switch>

        {this.props.bFoot? <Footer/> : null}

      </React.Fragment>
    )
  }
}

const mapStateToProps=state=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading
});
const mapDispatchToProps=dispatch=>({
  viewNav:(bl)=>{
    dispatch({type:'VIEW_NAV',payload:bl})
  },
  viewFoot:(bl)=>{
    dispatch({type:'VIEW_FOOT',payload:bl})
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
