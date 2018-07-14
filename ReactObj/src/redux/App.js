import React from 'react'
import {connect} from 'react-redux';
import Child from './Child';
//UI组件
class App extends React.Component{

  render(){
    let {todolist,add,async}=this.props;
    return (
      <div className="App">
        <h3>hello redux</h3>
        <input type="text" ref="ipt" />
        <input type="button" value="提交" onClick={()=>{add(this.refs.ipt.value)}}/>
        <input type="button" value="异步提交" onClick={async}/>
        <br/>
        <ul>
          {todolist.map((val,index)=>{
            return <li key={index}>{val}</li>
          })}
        </ul>
        <hr/>
        <Child></Child>
      </div>
    )
  }
}

//函数1 把仓库数据 props -> UI
const mapStateToProps=(state,ownProps)=>{
  // console.log(state,ownProps);
  return {
    todolist:state.todolist,
  }
};
//函数2 把请求 props -> UI
const mapDispatchToProps=(dispatch,ownProps)=>{
  // dispatch -action-> reducer
  return {
    add:(val)=>{
      dispatch({type:'ADD_ITEM',payload:val});
    },
    async:()=>{
      fetch(
        `/data/user.json`
      ).then(
        res=>res.json()
      ).then(
        res=>dispatch({type:'ADD_ITEM',payload:res.data.username})
      )
    }
  }
};

//connect 函数，链接 app组件和外部状态对象 , 返回一个容器组件

// const conainter = connect(函数1,函数2)(UI组件);

// const conainter = connect(mapStateToProps,mapDispatchToProps)(App);
// export default conainter;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);