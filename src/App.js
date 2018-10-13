import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Asset from "./Asset.js";
import ListCritical from "./ListCritical";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <ListCritical />
          </div>
        </header>
        <Asset />
      </div>
    );
  }
}

export default App;
