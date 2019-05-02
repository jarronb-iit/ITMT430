import React, { Component } from 'react';
import Layout from './Layout/';
import { loadUserInit } from './store/actions/authActions';
import store from './store';
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
