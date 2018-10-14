import React, { Component } from "react";
import "./App.css";
import Asset from "./Asset.js";
import ListCritical from "./ListCritical.js";
import CountNames from "./CountNames.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <ListCritical />
            <CountNames />
          </div>
        </header>
        <Asset />
      </div>
    );
  }
}

export default App;
