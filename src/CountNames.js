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

  filterClasses = () => {
    let myAssets = require("./assets.json").assets.filter(asset => {
      return asset.classList.length > 0;
    });
    let classAssets = [];

    for (let i = 0; i < this.state.uniqueAssetClassNames.length; i++) {
      let matchedName = this.state.uniqueAssetClassNames[i];
      let matchingAssets = myAssets.filter(asset => {
        for (let j = 0; j < asset.classList.length; j++) {
          return asset.classList[j].name === matchedName;
        }
      });
      classAssets.push({ [matchedName]: matchingAssets });
    }
  };

  render() {
    return (
      <div>
        {" "}
        Number of Unique Class Names: {this.state.uniqueAssetClassNames.length}
        <Button onClick={this.filterClasses}>Show me the Class!</Button>
      </div>
    );
  }
}
