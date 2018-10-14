import React, { Component } from "react";

export default class Asset extends Component {
  componentWillMount() {
    // opens json link in new tab upon start/refresh
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
