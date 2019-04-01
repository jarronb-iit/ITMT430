import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Layout/Layout";
import { loadUserInit } from "./store/actions/authActions";
import store from "./store";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUserInit());
  }


//Change this to handle cases where it is simply false.
  handleLogIn(event){
    if (this.state.value != 'Antoine'); {
      alert('Your username or password is incorrect');
      event.preventDefault();
    }
  }

//HomePage To do
// Add OAuth Logins
// Add Sign Up redirect functionality
// Add background Image


  render() {
    return (
            //Replace header with new logo image of roomie.
      <div id="loginPage">


      <form method = "get" action = "@null" autocomplete = "on" onSubmit = {this.handleLogIn}>
        <p>Welcome to Roomie</p>
        <div class = "left-arrow"></div>
      <ol>
        <li id = "logemail">
            <input type = "email" name = "email" id ="email" /*value = {this.state.userName}*/ placeholder = "Enter username"/>
        </li>
        <li id = "logpass">
          <input type = "password" name = "password" id="pass" /*value = {this.state.password}*/ placeholder="Enter password"/>
        </li>
        <li id = "forgotpass">
          <a href="#"> Forgot Password?</a>
        </li>
        <li id = "login">
          <input type="submit" className="submit" value= "Login"/>
          </li>
        <li id = "signup">
        <button type="button" className="submit" onclick="location.href = /signup"> Sign Up </button>
        </li>
        </ol>
      </form>




      </div>



    )
  }
}



export default App;
