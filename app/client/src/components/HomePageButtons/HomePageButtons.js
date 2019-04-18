import React, { Component } from 'react';
import Styles from './HomePageButtons.module.css';
import { NavLink } from 'react-router-dom';
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
      <NavLink className={BaseStyles.Button} to='/Login' value='/showLogin'>
        Login
      </NavLink>
      <NavLink
        className={signUpBtnClasses.join(' ')}
        to='/signup'
        value='showSignup'
      >
        Sign Up
      </NavLink>
    </div>
  );
}
