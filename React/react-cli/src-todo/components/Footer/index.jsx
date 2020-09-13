import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    CheckAll: PropTypes.bool.isRequired,
    checkedNum: PropTypes.number.isRequired,
    allNum: PropTypes.number.isRequired,
    isAllCheck: PropTypes.func.isRequired,
    deleteComplete: PropTypes.func.isRequired,
  };
  handleClick = () => {
    if(window.confirm('你确定要删除已完成爱好嘛?')){
    this.props.deleteComplete();

    }
  };

  handleChange = () => {
    const { checkedNum, isAllCheck } = this.props;
    isAllCheck(checkedNum);
  };

  render() {
    const { checkedNum, allNum, CheckAll } = this.props;

    let isShowDel = false;
    if (checkedNum > 0) {
      isShowDel = true;
    }
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={CheckAll}
          />
        </label>
        <span>
          <span>已完成{checkedNum}</span> / 全部{allNum}
        </span>
        <button
          className="btn btn-danger"
          style={{ display: isShowDel ? "block" : "none" }}
          onClick={this.handleClick}
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}
