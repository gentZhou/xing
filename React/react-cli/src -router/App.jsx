import React, { Component } from "react";
import { BrowserRouter, Link, Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {},
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>Vue Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <Link className="list-group-item" to="/about">
                  About
                </Link>
                <Link
                  className="list-group-item myActive"
                  to="/home"
                  aria-current="page"
                >
                  Home
                </Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <div>
                    <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect exact path='/' to="/home" />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
