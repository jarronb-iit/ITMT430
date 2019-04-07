import React, { Component } from 'react';
import Styles from './HomePageButtons.module.css';
import BaseStyles from '../../BaseStyles/Button.module.css';

export default function Loginbuttons(props) {
  const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
  return (
    //Replace header with new logo image of roomie.
    <div className={Styles.HomePageBtns}>
      {/* 
      <button id='login'>Login</button>
      <button id='signUp' onClick={props.loginRequest}>
        Sign Up
      </button> */}

      <button
        className={BaseStyles.Button}
        onClick={props.changeVisibility}
        value="showLogin"
      >
        Login
      </button>
      <button
        className={signUpBtnClasses.join(' ')}
        onClick={props.changeVisibility}
        value="showSignup"
      >
        Sign Up
      </button>
    </div>
  );
}
