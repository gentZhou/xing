import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
              <h2>Home组件内容</h2>
            <ul className="nav nav-tabs">
              <li>
                <a href="/home/news">News</a>
              </li>
              <li>
                <a
                  href="/home/message"
                  className="myActive"
                  aria-current="page"
                >
                  Message
                </a>
              </li>
            </ul>
            <div>
              <div>
                <ul>
                  <li>
                    <a href="/home/message/1">message001</a>{" "}
                    &nbsp;&nbsp;
                    <button>push</button> &nbsp;
                    <button>replace</button>
                  </li>
                  <li>
                    <a href="/home/message/2">message002</a>{" "}
                    &nbsp;&nbsp;<button>push</button> &nbsp;
                    <button>replace</button>
                  </li>
                  <li>
                    <a href="/home/message/4">message004</a>{" "}
                    &nbsp;&nbsp;<button>push</button> &nbsp;
                    <button>replace</button>
                  </li>
                </ul>
                <button>前进</button>
                <button>后退</button>
              </div>
            </div>
          </div>
        )
    }
}
