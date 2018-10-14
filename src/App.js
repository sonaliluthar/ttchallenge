import React, { Component } from "react";
import "./App.css";
import Asset from "./Asset.js";
import ListCritical from "./ListCritical.js";
import CountNames from "./CountNames.js";

class App extends Component {
  render() {
    return (
      <span className="App">
        <div>
          <ListCritical />
          <CountNames />
        </div>
        <Asset />
      </span>
    );
  }
}

export default App;
