
import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import App from "./App";

class hotApp extends Component {
  render() {
    return (
      <App {...this.props}/>
    );
  }
}

export default hot(hotApp);
