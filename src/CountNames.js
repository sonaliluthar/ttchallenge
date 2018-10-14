import React, { Component } from "react";
import assets from "./assets.json";
import { Button } from "antd";

export default class CountNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueAssetClassNames: [],
      clicked: false
    };
  }

  componentDidMount() {
    let data = require("./assets.json");
    let unique = this.state.uniqueAssetClassNames;
    for (let i = 0; i < data.assets.length; i++) {
      let assetClass = data.assets[i].classList;

      for (let j = 0; j < assetClass.length; j++) {
        let className = assetClass[j].name;
        if (!unique.includes(className)) {
          unique.push(className);
        }
      }
    }
    this.setState({ uniqueAssetClassNames: unique });
  }

  render() {
    return (
      <div>
        {" "}
        Number of Unique Class Names: {this.state.uniqueAssetClassNames.length}
      </div>
    );
  }
}
