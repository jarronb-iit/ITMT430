import React, { Component } from 'react';
import Styles from './HomePageButtons.module.css';

export default function Loginbuttons(props) {
  const signUpBtnClasses = [Styles.Btn, Styles.SignUpBtn];
  return (
    //Replace header with new logo image of roomie.
    <div className={Styles.HomePageBtns}>
      {/* 
      <button id='login'>Login</button>
      <button id='signUp' onClick={props.loginRequest}>
        Sign Up
      </button> */}

      <button className={Styles.Btn} onClick={props.loginRequest}>
        Login
      </button>
      <button
        className={signUpBtnClasses.join(' ')}
        onClick={props.signUpRequest}
      >
        Sign Up
      </button>
    </div>
  );
}
