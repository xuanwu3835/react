import React from 'react'
import '../assets/css/footer.css';
import {Link} from 'react-router-dom'

class Footer extends React.Component{
  render(){
    return (
      <div className="foot-btn" >
        <ul>
          <li className="home"><Link to="/home"/></li>
          <li className="write"><Link to="/buycar"/></li>
          <li className="my"><Link to="/user"/></li>
        </ul>
      </div>
    )
  }
}
export default Footer;