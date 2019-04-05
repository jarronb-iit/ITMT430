import React, { Component } from 'react';
import SampleContainer from '../containers/SampleContainer/SampleContainer';
import LoginButtons from '../components/LoginPageButtons/LoginButtons';
import HomePage from '../Pages/Home/Home';
import './Layout.css';
// import { Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return <LoginButtons />;
  }
}
