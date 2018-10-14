import React, { Component } from "react";

export default class Asset extends Component {
  componentWillMount() {
    setTimeout(() => {
      const response = {
        file: "https://www.twinthread.com/code-challenge/assets.txt"
      };
      window.open(response.file);
    }, 100);
  }

  render() {
    return <div />;
  }
}
