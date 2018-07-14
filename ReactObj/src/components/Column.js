import React from 'react'
import '../assets/css/list.css';
class Column extends React.Component {
  state={
    styleData:{
      clear: 'both',
      marginBottom:'1rem',
      marginTop:'.7rem'
    }
  };
  render() {
    return (
      <div className="newsList" style={this.state.styleData}>
        <ul>
          <li>
            <a href="javascript:;">
              <h2>xx</h2>
              <p>oooo</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h2>xx</h2>
              <p>oooo</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h2>xx</h2>
              <p>oooo</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h2>xx</h2>
              <p>oooo</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h2>xx</h2>
              <p>oooo</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h2>xx</h2>
              <p>oooo</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h2>xx</h2>
              <p>oooo</p>
            </a>
          </li>

        </ul>
      </div>
    )
  }
}

export default Column;