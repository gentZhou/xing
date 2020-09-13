import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";

class App extends Component {
  state = {
    num: 1,
  };
  increment = () => {
    //更新redux数据
    this.props.increment(this.state.num)
  };

  decrement = () => {
    this.props.decrement(this.state.num)

  };

  incrementOdd = () => {
    const {count} =this.props
    if ((count & 1) === 0) return;
    this.props.increment(this.state.num)
  };

  incrementAsync = () => {
    setTimeout(() => {
      // store.dispatch(increment(this.state.num));
    this.props.increment(this.state.num)

    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      num: +e.target.value,
    });
  };

  // connect 内部数据发生改变,内部会自动更新

  // componentDidMount() {
  //   //事件:当store对象中的数据发生变化,就会触发
  //   //重新渲染组件
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }


  render() {
    // 读取state
    // const conut = store.getState();
    const {count}=this.props

    return (
      <Fragment>
        <p>click {count} times</p>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.incrementOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>incrementAsync</button>
      </Fragment>
    );
  }
}
/* 
    connect 是一个高阶组件: 本质上是一个函数,执行函数传入一个原组件作为参数返回一个新组件
    新组件内部就会渲染原组件,目的:新组件定义公共代码,通过props方式传递给原组件
    作用:
      负责给子组件传递以prop是传递redux管理状态数据和更新状态数据的方法

    子组件可以直接通过this.props.xxx使用

*/
//第一个参数:负责给子组件传递需要使用的redux数据
const mapStateToProps = (state) => {
  //第二个参数:负责给子组件传递需要使用的更新redux数据的方法(传更新方法)
  //state就是redux管理的所有状态数据

  //返回值是一个对象
  //对象中的数据,就会以props的方式传递给App组件
  return{
    count:state
  }
};

const mapDisPatchToProps = (dispatch) => {
  //当前函数在connect内部会调用,调用时会传入dispatch
  //dispatch就是store.dispatch,来间接触发更新的方法

  //返回值是一个对象
  //对象中的数据,就会以props的方式传递给App组件
  return{
    increment(data){
      //1.调用action函数生成action对象
      const action = increment(data)
      //2.调用dispatch方法触发更新
      dispatch(action)
    },
    decrement(data){
      //1.调用action函数生成action对象
      const action = decrement(data)
      //2.调用dispatch方法触发更新
      dispatch(action)
    }
  }
};
// 返回一个新组件
// const NewApp = connect(mapStateToProps, mapDisPatchToProps)(App);

// export default NewApp
export default connect((state)=>({count:state}),{increment,decrement})(App)