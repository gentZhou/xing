import React, { Component } from "react";
import axios from 'axios'

export default class App extends Component {
  state = {
    isLoading: false,
    repo:{},
  };

  componentDidMount(){
      this.setState({
          isLoading:true,
      })

      axios
        .get('https://api.github.com/search/repositories?q=r&sort=stars')
        .then((res)=>{
            const repo = res.date.items[0];
            this.setState({
                isLoading:false,
                repo:{
                    name:repo.name,
                    url:repo.html_url
                }
            })
        })
        .catch((err)=>{
            console.log(err)
        })
  }

  render() {
      const {isLoading,repo} =this.state;
    if (isLoading) {
        return  <h1>loading....</h1>;
     
    }

    return <div>most star repo is
      <a href={repo.url}>{repo.name}</a>
    </div>;
  }
}
