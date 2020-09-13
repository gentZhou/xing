import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'

import store from './redux/store'

//内部通过context组件通信,给后代组件传递store对象
//后代组件通过指定语法就能接受store对象(可以省略手动引入store代码)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))

/*
    connect 是一个高阶组件: 本质上是一个函数,执行函数传入一个原组件作为参数返回一个新组件
    新组件内部就会渲染原组件,目的:新组件定义公共代码,通过props方式传递给原组件
*/