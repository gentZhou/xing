import React, { Component } from 'react'

export default class Child extends Component {

   
    handleClick=()=>{
        function fn(){}
        fn()()
    }
    render() {
        // console.log(a)
        return (
            <div>
                <h1>Child....</h1>
                <button onClick={this.handleClick}>按钮</button>
            </div>
        )
    }
}
