import React from 'react'
import '../assets/css/login.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {asyncAction2} from "../store/asyncAction";
class Login extends React.Component {
  render() {
    return (
      <div className="content">
        <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to={'/login'}>登录</Link>
            <span></span>
            <Link to={{pathname:'/reg'}}>注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" value=""/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" value=""/>
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="登 录" className="login-btn" onClick={()=>{
            this.props.login(this.props.history)
          }}/>
          <a href="javascript:;" className="tishi">忘记密码？</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps=state=>({});
const mapDispatchToProps=dispatch=>({
  login:(history)=>{
    // dispatch({type:'UPDATE_USER',payload:{xxx:'双向绑定数据'}})
    asyncAction2('/data/user.json',dispatch,'UPDATE_USER',history)
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
