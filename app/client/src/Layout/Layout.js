import React, { Component } from 'react';
import SampleContainer from '../containers/SampleContainer/SampleContainer';
import Home from '../Pages/Home/Home';
import Styles from '../Pages/Home/Home.module.css';
import { Route } from 'react-router-dom';

// import { Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div className={Styles.Home}>
        <header className={Styles.Title}>Roomie </header>
        <Route path='/' component={Home} />
      </div>
    );
  }
}
