import React, { Component } from "react";
import "./App.css";

import NormalReact from "./components/NormalReact";
import HooksReact from "./components/HooksReact";
import HooksReactReduce from "./components/HooksReactReduce";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NormalReact />
        <br />
        <HooksReact />
        <br />
        <HooksReactReduce />
      </div>
    );
  }
}

export default App;
