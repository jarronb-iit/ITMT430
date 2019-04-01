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
// Add Sign Up
// Add background Image


  render() {
    return (
            //Replace header with new logo image of roomie.
      <div id="loginPage">


      <div className="Welcome">
      <h1>Welcome to Roomie</h1>
      </div>

      <form onSubmit= {this.handleLogIn}>
      <label className="usernameBox">
        Username
          <input type = "text" name = "username" /*value = {this.state.userName}*/ placeholder = "Enter username"/>
      </label>
      <br/>
      <label className = "passwordBox">
        Password
        <input type = "password" name = "password" /*value = {this.state.password}*/ placeholder="Enter password"/>
      </label>
      <input type="submit" value= "Submit"/>
      </form>
      <br/>
       <button type="button" id="signUp">Sign Up</button> 



      </div>



    )
  }
}



export default App;
