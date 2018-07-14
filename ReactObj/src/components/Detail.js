import React from 'react'
import head from '../assets/img/head.png';
import zan from '../assets/img/zan.png';
import xing from '../assets/img/xing.png';
import fx from '../assets/img/fx.png';
import '../assets/css/detail.css';

import querystring from 'query-string';
import {date} from '../common/date';

class Detail extends React.Component{
  state={
    detail:{}
  };
  componentDidMount(){
    let dataName=querystring.parse(this.props.location.search).dataName;
    console.log(dataName);
    fetch(
      `/data/article_${dataName}.data`
    ).then(
      res=>res.json()
    ).then(
      // data=>console.log(data)
      data=>this.setState({detail:data[this.props.match.params.aid-1]})
    )
  }
  render(){
    let {match,location,history}=this.props;
    let detail=this.state.detail;
    console.log(match,location);
    return (
      <React.Fragment>
        <div id="nav">
          <ul>
            <li className="l-btn" onClick={()=>{this.props.history.go(-1)}}></li>
          </ul>
        </div>
        <div className="content">
          <div className="header clear"><h2><img src={head} alt=""/></h2><p>作者名字</p></div>
          <div className="cont">
            <h3>{detail.title}</h3>
            <div className="time"><p>{date(detail.time)} <span><img src={zan} alt=""/></span></p></div>
            <div className="text-box" dangerouslySetInnerHTML={{__html:detail.content}}></div>
          </div>
        </div>
        <div id="foot-btn">
          <ul>
            <li className="say"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="javascript:;">
              <i><img src={xing} alt=""/></i>
            </a></li>
            <li className="fx"><a href="javascript:;">
              <i><img src={fx} alt=""/></i>
            </a></li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
export default Detail;