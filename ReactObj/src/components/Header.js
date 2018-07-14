import React from 'react'

import '../assets/css/header.css';

import {Route,NavLink,Redirect,Switch} from 'react-router-dom'

class Header extends React.Component{
  render(){
    return (
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active">首页</NavLink>
          </li>
          <li>
            <NavLink to="/follow" activeClassName="active">关注</NavLink>
          </li>
          <li>
            <NavLink to="/column" activeClassName="active">栏目</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header;