import React, { Component } from "react";
import PropTypes from 'prop-types'

import Item from './item'



export default class List extends Component {
    //声明接收
    static propTypes= {
        todos:PropTypes.array.isRequired,
        delTodo:PropTypes.func.isRequired,
        updateTodo:PropTypes.func.isRequired,
    }



  render() {
    const {todos,delTodo,updateTodo} = this.props


    return (
      <ul className="todo-main">
          {
              todos.map((todo)=> <Item key={todo.id} todo={todo} delTodo={delTodo} updateTodo={updateTodo} />)
          }
       
      </ul>
    );
  }
}
