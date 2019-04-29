import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Styles from './App.module.css';
import Layout from './Layout/Layout';
import { loadUserInit } from './store/actions/authActions';
import store from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import theme from './App.MuiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

console.log(theme);

store.dispatch(loadUserInit());

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
