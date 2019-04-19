import React, { Component } from 'react';
import Home from '../Pages/Home/Home';
import Styles from '../Pages/Home/Home.module.css';
import { Route } from 'react-router-dom';

// import { Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return <Route path="/" component={Home} />;
  }
}
