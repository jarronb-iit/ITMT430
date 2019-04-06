import React, { Component } from 'react';
import Styles from './LoginPageButtons.module.css';

export default function Loginbuttons(props) {
  return (
    //Replace header with new logo image of roomie.
    <div id="homePage">
      <header id="title"> Roomie </header>
      {/* 
      <button id='login'>Login</button>
      <button id='signUp' onClick={props.loginRequest}>
        Sign Up
      </button> */}

      <form>
        <button id="login" onClick={props.loginRequest}>
          Login
        </button>
        <button id="signUp" onClick={props.signUpRequest}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
