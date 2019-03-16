import React, { Component } from "react";
import SampleContainer from "../containers/SampleContainer/SampleContainer";
import "./Layout.css";
// import { Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <h1>Layout Component</h1>
        <SampleContainer />
      </div>
    );
  }
}
