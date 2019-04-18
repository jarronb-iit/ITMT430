import React, { Component } from 'react';
import Styles from '../SignUpForm/SignUpForm.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import { NavLink } from 'react-router-dom';

export default function UserType(props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
  const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
  return (
    <form
      id='userType'
      className={Styles.SignUpForm}
      onSubmit={props.onSignUpFormSubmit}
    >
      <h1>Im Looking for property</h1>
      <h1>Im selling property</h1>
      <NavLink className={BaseStyles.Button} to='/aboutme' value='/showAboutMe'>
        Back
      </NavLink>
      <NavLink className={signUpBtnClasses.join(' ')} to='#' value='COMPLETE'>
        FINISH
      </NavLink>
    </form>
  );
}
