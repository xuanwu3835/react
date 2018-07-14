import React from 'react'
import img1 from '../assets/images/img_1.jpg';
import img2 from '../assets/images/img_2.jpg';
import img3 from '../assets/images/img_3.jpg';
import '../assets/css/silder.css';

import ReactSwipe from 'react-swipe';

class Silder extends React.Component{
  render(){
    return (
      <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto:2000}}>
        <div style={{background:'#399'}}>PANE 1</div>
        <div style={{background:'#393'}}>PANE 2</div>
        <div style={{background:'#939'}}>PANE 3</div>
      </ReactSwipe>
    )
  }
  componentDidMount(){
    /*var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })*/
  }
}
export default Silder;