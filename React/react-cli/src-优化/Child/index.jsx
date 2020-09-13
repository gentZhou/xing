import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Child extends Component {
    static propTypes = {
        a: PropTypes.number.isRequired,
        c: PropTypes.array.isRequired
        
    }
    state={
        age:18
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     const keys=Object.keys(this.props)
    //     const stateKeys=Object.keys(nextState)

    //     for(let j=0;j < keys.length;j++){
    //         const key =keys[j]
    //         if(nextProps[key]!==this.props[key]){
    //             return true
    //         }
    //     }

    //     for(let i=0;i < stateKeys.length;i++){
    //         const key =stateKeys[i]
    //         if(nextState[key]!==this.state[key]){
    //             return true
    //         }
    //     }
    //     return false
    // }

    handleClick=()=>{
        this.setState({
            age:this.state.age + 1
        })
    }

    render() {
        const {a,c} =this.props
        const {age}=this.state
        console.log('Child重新渲染了')
        return (
            <div>
                <h1>Child</h1>
                <span>a:{a}</span>
                <span>年龄:{age}</span>
                <button onClick={this.handleClick}>一年过去了</button>
                <ul>
                    {
                        c.map(item=>{
                            return <li key={item.name}>name : {item.name} age : {item.age} </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
