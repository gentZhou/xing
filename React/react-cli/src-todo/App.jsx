import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

export default class App extends Component {
  //初始化数据
  state = {
    todos: [
      { id: 1, content: "唱歌", isCheck: false },
      { id: 2, content: "攀爬", isCheck: false },
      { id: 3, content: "旅游", isCheck: false },
      { id: 4, content: "滑雪", isCheck: false },
      { id: 5, content: "撩妹", isCheck: false },
    ],
  };
  id=6

  //删除已完成todo
  deleteComplete=()=>{
    const { todos } = this.state;
    this.setState({
        todos:todos.filter(todo=>todo.isCheck ===false)
    })
  }

  //添加todo
  addTodo =(content)=>{
    const { todos } = this.state;
    this.setState({
        todos:[{id:this.id++,content,isCheck:false},...todos]
    })
  }

  //修改单项,更新数据
  updateTodo =(id)=>{
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) =>{
          if(todo.id === id){
            return {...todo ,isCheck:!todo.isCheck}
          }
          return todo
      }),
    });
  }

  //删除单项
  delTodo = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  //全选\全不选
  isAllCheck = (checkAll) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => ({ ...todo, isCheck: !checkAll })),
    });
  };

  render() {
    const { todos } = this.state;

    //全部数量
    const allNum = todos.length;

    //已选数量
    const checkedNum = todos.reduce((p, c) => {
      return p + +c.isCheck;
    }, 0);

    //是否全选
    let CheckAll = checkedNum === allNum;

    if(allNum === 0){
        CheckAll=false
    }

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} delTodo={this.delTodo} updateTodo={this.updateTodo} />
          <Footer
            checkedNum={checkedNum}
            allNum={allNum}
            CheckAll={CheckAll}
            isAllCheck={this.isAllCheck}
            deleteComplete={this.deleteComplete}
          />
        </div>
      </div>
    );
  }
}
