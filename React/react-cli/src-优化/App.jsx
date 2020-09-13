import React,{Component,Fragment} from 'react'

import Child from './Child'
import Son from './Son'

export default class App extends Component{

  state={
    a:1,
    b:2,
    c:[
      {name:'jack',age:18}
    ]
  }

  handleA=()=>{
    this.setState({
      a:this.state.a +1
    })
  }

  handleB=()=>{
    this.setState({
      b:this.state.b+1
    })
  }

  revise=()=>{
    this.state.c.push({name:'zhou'})
    this.setState({
      c:this.state.c
    })
  }


  render(){
    const {a,b,c}=this.state
    console.log('App重新渲染了')


    return(
      <Fragment>
        <h1>App</h1>
        <Child a={a} c={c}/>
        <button onClick={this.handleA}>修改Child</button>
        <Son b={b} />
        <button onClick={this.handleB}>修改Son</button>

        <button onClick={this.revise}>添加</button>
      </Fragment>
    )
  }
}