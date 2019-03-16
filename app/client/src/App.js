import React, { Component } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import { loadUserInit } from "./store/actions/authActions";
import store from "./store";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUserInit());
  }
  render() {
    return <Layout />;
  }
}

export default App;
