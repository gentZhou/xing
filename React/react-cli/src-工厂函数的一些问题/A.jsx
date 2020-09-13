import React from 'react'
/* 
    工厂函数组件没有this(没有state/refs),
    没有生命周期函数
*/
export default function A(props){
    console.log(props)
    console.log(this)
    
    return (<div>A...</div>)
}