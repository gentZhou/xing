import React from "react";
import "./App.css";

import Hello from "./components/Hello";

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.createRef = React.createRef()
  //   console.log(this.createRef)
  // }

  blur = React.createRef()

  state={
    isLikeMe:true,
    person:{
      name:'覆天龙王',
      age:108000,
      sex:'男性'
    }
  }

  handleClick =()=>{
    this.setState({
      isLikeMe:!this.state.isLikeMe
    })
  }
  // constructor(){
  //   super()
  //   this.state={
  //     isLikeMe=true
  //   }

  // }
  handleClick =()=>{
    console.log(this.refs.input.value)
  }

  handleBlur =()=>{
    console.log(this.blur.current.value)
  }


  render() {
    const boolean = this.state.isLikeMe
    const context = boolean ? '你喜欢我':'我喜欢你'

    const {person} =this.state
    console.log(this)
  console.log(this.blur)

    return (
      <div>
        <p className='color'>App</p>
        <h1 onClick={this.handleClick}>{context}</h1>
        <Hello person={person} />
        <input ref='input' />
        <button onClick={this.handleClick}>提示数据</button>
        {/* <input placeholder='失去焦点提示数据' onBlur={this.handleBlur} ref={(input)=>this.funcRef = input}  / > */}
        <input placeholder='失去焦点提示数据' onBlur={this.handleBlur} ref={this.blur}  / >

        {/* <input ref={this.blur} /> */}
      </div>
    );
  }
}

export default App;
