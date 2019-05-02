import React, { Component } from 'react';
import Layout from './Layout/';
import { CssBaseline } from '@material-ui/core';
import theme from './App.MuiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { BrowserRouter } from 'react-router-dom';

// console.log(theme);

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { auth } = this.props;
    let renderedComp = '';

    if (auth.done) {
      renderedComp = <Layout auth={auth} />;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>{renderedComp}</BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(actions.loadUserInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
