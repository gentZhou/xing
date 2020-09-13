import React, { Component } from "react";
import Child from './Child'

export default class App extends Component {


  state={
    hasError:false
  }

  //生命周期函数,一旦后台组件报错,就会触发
  static getDerivedStateFromError(error){
    //要求返回新的状态
    return {
      hasError:true,
    }
  }

  componentDidCatch(error,info){
    console.log(error,info)
  }


  render() {
    const {hasError}=this.state
    return (
      <div>
        <h1>App...</h1>
        {hasError ? <p>子组件出错了</p> : <Child/>}
      </div>
    );
  }
}
