import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Layout/Layout";
import { loadUserInit } from "./store/actions/authActions";
import store from "./store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    store.dispatch(loadUserInit());
  }

//To do
// Add function to get user's first name and set as Display for welcomeUser
// Add functionality to to Start Search button
// Add function to inject pastSearch div with most roulette image of top 5 most recent searches.
// Implement Hamburger menu, utilize the following example: https://codepen.io/naturalclar/pen/zEwvbg


  render() {
    return (
            //Replace header with new logo image of roomie.
      <div id="homePage">

      <header id="header"> Roomie </header>


      <div id ="welcomeUser">
        <p> Welcome back, User! </p>
      </div>

      <div id="startSearch">
      <button type="button" className="submit" /*onclick="location.href = /signup"*/> Start Search </button>
      </div>

      <div id="pastSearch">

      </div>

      </div>



    )
  }
}



export default Home;
