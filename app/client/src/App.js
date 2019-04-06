import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Styles from './App.module.css';
import Layout from './Layout/Layout';
import { loadUserInit } from './store/actions/authActions';
import store from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={Styles.App}>
        <Layout />
      </div>
    );
  }
}

export default App;
