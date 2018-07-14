import React from 'react'
import '../assets/css/list.css';

import {Link} from 'react-router-dom'

/*class List extends React.Component {
  render() {
    return (
      <div className="newsList">
        <ul>
          <li>
            <Link to="/detail/001">
              <h2>1.xx</h2>
              <p>oooo</p>
            </Link>
          </li>
          <li>
            <Link to="/detail/002">
              <h2>2.xx</h2>
              <p>oooo</p>
            </Link>
          </li>

        </ul>
      </div>
    )
  }
}*/
const List=({list,dataName})=>(
  <div className="newsList">
    <ul>
      {
        list.map((item,index)=>{
          return (
            <li key={item.id}>
              <Link
                to={'/detail/'+item.id+'?dataName='+dataName}
              >
                <h2>{item.id}.{item.title}</h2>
                <p>{item.detail}</p>
              </Link>
            </li>
          )
        })
      }
    </ul>
  </div>
);

export default List;