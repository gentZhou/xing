import React, { Component } from 'react'
import A from './A'

export default class App extends Component {
  createRef = React.createRef()

  componentDidMount(){
    console.log(this.createRef)

}
  render() {
    return (
      <div>
        App....
        <A name='jack' ref={this.createRef}/>
      </div>
    )
  }
}
