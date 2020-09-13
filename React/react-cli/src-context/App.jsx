import React, { Component, Fragment } from "react";
import Father from "./Father";

import name from "./context/nameContext";

const {Provider} =name

export default class App extends Component {
  state = {
    name: "zhou",
  };
  render() {
    return (
      <Fragment>
        <h1>APP...</h1>
        <Provider value={this.state.name}>
          <Father />
        </Provider>
      </Fragment>
    );
  }
}
