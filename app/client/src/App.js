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


  render() {
    return (
      <div id="loginPage">

      <div className="1">
      <h1>Where</h1>
      </div>
      <form onSubmit= {this.handleLogIn}>
      <label className="login">
        UserName
          <input type = "text" name = "username" value = {this.state.userName} placeholder = "Enter username"/>
      </label>
      <label className = "login">
        Password
        <input type = "password" name = "password" value = {this.state.password} placeholder="Enter password"/>
      </label>
      <input type="submit" value= "Submit"/>
      </form>



      </div>



    )
  }
}



export default App;
