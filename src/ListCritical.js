import React, { Component } from "react";
import { Button, List } from "antd";

export default class ListCritical extends Component {
  constructor(props) {
    super(props);
    // create state variable to hold list of critical assets
    this.state = {
      criticalAssets: [],
      clicked: false
    };
  }

  componentDidMount() {
    let data = require("./assets.json");
    let critAssets = this.state.criticalAssets;

    // checks each asset with for loop and adds critical assets to array
    for (let i = 0; i < data.assets.length; i++) {
      let asset = data.assets[i];
      if (asset.status === 3) {
        critAssets.push(asset);
      }
    }
    this.setState({ criticalAssets: critAssets });
  }

  // displays critical assets
  onClick = () => {
    this.setState({ clicked: true });
  };

  // closes display
  closeCrit = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>List Critical Assets</Button>
        {this.state.clicked ? (
          <div>
            {this.state.criticalAssets.map(asset => asset.name + ", ")}
            <Button onClick={this.closeCrit}>Close</Button>
          </div>
        ) : null}
      </div>
    );
  }
}
