import React, { Component } from "react";
import { Button, List } from "antd";

export default class CountNames extends Component {
  constructor(props) {
    super(props);
    // create state variables to hold list of unqiue class names, and list of assets associated with each class
    this.state = {
      uniqueAssetClassNames: [],
      classAssets: [],
      clicked: false
    };
  }

  componentDidMount() {
    let data = require("./assets.json");
    let unique = this.state.uniqueAssetClassNames;

    // nested for loop to create array containing each class name
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
    // array of assets that have a populated classList field
    let myAssets = require("./assets.json").assets.filter(asset => {
      return asset.classList.length > 0;
    });
    let classAssets = [];

    // for each class name
    for (let i = 0; i < this.state.uniqueAssetClassNames.length; i++) {
      let matchedName = this.state.uniqueAssetClassNames[i];

      // create a list of assets that contain the given class name
      let matchingAssets = myAssets.filter(asset => {
        //check each class name in list with for loop
        for (let j = 0; j < asset.classList.length; j++) {
          if (asset.classList[j].name === matchedName) {
            return true;
          }
        }
      });

      // reassign array to only contain names of matching assets
      matchingAssets = matchingAssets.map(asset => asset.name);
      classAssets.push({ className: matchedName, assets: matchingAssets });
    }
    this.setState({ classAssets: classAssets, clicked: true });
  };

  // close list of assets
  closeList = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <div>
        <div>
          Number of Unique Class Names:{" "}
          {this.state.uniqueAssetClassNames.length}
        </div>
        <div>
          <Button onClick={this.filterClasses}>
            Assets associated with each class
          </Button>
          {this.state.clicked ? (
            <Button onClick={this.closeList}>Close</Button>
          ) : null}
          {this.state.clicked
            ? this.state.classAssets.map(myClass => (
                <List
                  size="small"
                  header={
                    <div className="list-header">{myClass.className}</div>
                  }
                  bordered
                  dataSource={myClass.assets}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}
