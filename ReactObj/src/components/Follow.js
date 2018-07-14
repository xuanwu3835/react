import React from 'react'
import List from "./List";
import '../assets/css/follow.css';
import {asyncAction} from "../store/asyncAction";
import {connect} from "react-redux";
class Follow extends React.Component{
  componentDidMount(){
    let {get} = this.props;
    let url=`/data/follow.data`;
    get(url);
  }
  render(){
    return (
      <List list={this.props.followData} dataName="follow" />
    )
  }
}
const mapStateToProps=state=>({
  followData:state.followData,
});

const mapDispatchToProps=dispatch=>({
  get:(url)=>{asyncAction(url,dispatch,'UPDATE_FOLLOW')}
});

export default connect(mapStateToProps,mapDispatchToProps)(Follow);