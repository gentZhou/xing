import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  state = {
    isDefault: false,
  };
  static propTypes = {
    todo: PropTypes.object.isRequired,
    delTodo:PropTypes.func.isRequired,
    updateTodo:PropTypes.func.isRequired

  };

  handleMouse = (isDefault) => {
    return ()=>{
      this.setState({
        isDefault
      })
    }
  };

  handleClick=()=>{
    const {todo,delTodo} = this.props
    if(window.confirm(`你确定要删除${todo.content}嘛?`)){
      delTodo(todo.id)
    }
  }

  handleChange = () => {
    const {todo,updateTodo} = this.props
    updateTodo(todo.id)
  };

  render() {
    const { todo } = this.props;
    const { isDefault } = this.state;

    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.isCheck}
            onChange={this.handleChange}
          />
          <span>{todo.content}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: isDefault ? "block" : "none" }}
          onClick={this.handleClick}
        >
          删除
        </button>
      </li>
    );
  }
}
