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

//Password Visibility thanks to codePen https://codepen.io/Don-m/pen/mmgyQG
  constructor(props){
   super(props);
   this.state = {
     type: 'input',
     score: 'null'
   }
   this.showHide = this.showHide.bind(this);
 }

 showHide(e){
   e.preventDefault();
   e.stopPropagation();
   this.setState({
     type: this.state.type === 'input' ? 'password' : 'input'
   })
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
        <input type = "text" name = "password" value = {this.state.password} placeholder="Enter password"/>
        <span className = "password_show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
      </label>
      <input type="submit" value= "Submit"/>
      </form>



      </div>



    )
  }
}



export default App;
