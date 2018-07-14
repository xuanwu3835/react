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
import {AuthUser} from "../guard/AuthUser";

class App extends React.Component{
  render(){
    return (
      <React.Fragment>

        <Header/>

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

        <Footer/>

      </React.Fragment>
    )
  }
}
export default App;