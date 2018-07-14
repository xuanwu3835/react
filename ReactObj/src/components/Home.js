import React from 'react'
import Silder from "./Silder";
import List from "./List";
import {connect} from 'react-redux';

import {asyncAction} from '../store/asyncAction';

class Home extends React.Component{
  constructor(props){
    super();
    let url=`/data/index.data`;
    props.get(url);
  }
  render(){
    let homeData= this.props.homeData;
    let get= this.props.get;
    return (
      <React.Fragment>
        <Silder/>
        <List list={homeData} dataName="home" />
      </React.Fragment>
    )
  }
}



const mapStateToProps=state=>({
  homeData:state.homeData,
});

const mapDispatchToProps=dispatch=>({
  get:(url)=>{asyncAction(url,dispatch,'UPDATE_HOME')}
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
