import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default function LoginButtons(props) {
  return (
    //Replace header with new logo image of roomie.
    <div id='homePage'>
      <header> Roomie </header>
      <button id='login'>Login</button>
      <button id='signUp' onClick={props.loginRequest}>
        Sign Up
      </button>
    </div>
  );
}
