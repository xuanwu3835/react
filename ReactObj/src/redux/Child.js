import React from 'react'
import {connect} from 'react-redux'
import state from "./state";
//UI组件
class Child extends React.Component{
  render(){
    return (
      <div className="">
        <h3>子组件</h3>
        {this.props.todolist}
        <br/>
        <input type="button" value="提交" onClick={this.props.add}/>
      </div>
    )
  }

}

const mapStateToProps=state=>(
  {
    todolist:state.todolist
  }
);

const mapDispatchToProps=dispatch =>(
  {
    add:()=>{
      dispatch({type:'ADD_ITEM',payload:'child actins'})
    }
  }
);



export default connect(mapStateToProps,mapDispatchToProps)(Child)




