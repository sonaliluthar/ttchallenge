import React, { Component } from "react";
import assets from "./assets.json";
import { Button } from "antd";

export default class ListCritical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criticalAssets: [],
      clicked: false
    };
  }

  componentDidMount() {
    let data = require("./assets.json");
    let critAssets = this.state.criticalAssets;
    for (let i = 0; i < data.assets.length; i++) {
      let asset = data.assets[i];
      if (asset.status === 3) {
        critAssets.push(asset);
      }
    }
    this.setState({ criticalAssets: critAssets });
  }

  onClick = () => {
    this.setState({ clicked: true });
  };

  closeCrit = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>List Critical Assets</Button>
        {this.state.clicked ? (
          <div>
            {this.state.criticalAssets.map((asset, index) => asset.name)}
            <Button onClick={this.closeCrit}>Close</Button>
          </div>
        ) : null}
      </div>
    );
  }
}
