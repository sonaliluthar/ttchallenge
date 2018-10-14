import React, { Component } from "react";
import { Button, List } from "antd";

export default class CountNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueAssetClassNames: [],
      classAssets: [],
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
          if (asset.classList[j].name === matchedName) {
            return true;
          }
        }
      });
      matchingAssets = matchingAssets.map(asset => asset.name);
      classAssets.push({ className: matchedName, assets: matchingAssets });
    }
    this.setState({ classAssets: classAssets, clicked: true });
  };

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
