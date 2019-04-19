import React, { Component } from 'react';
import Home from '../Pages/Home/Home';
import Index from '../Pages/Index/Index';
import Styles from '../Pages/Home/Home.module.css';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../hoc/ProtectedRoute';

// import { Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/home" component={Index} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}
