import React, { Component } from 'react';
import Styles from './SignUpForm.module.css';
import { NavLink } from 'react-router-dom';
import BaseStyles from '../../BaseStyles/Input.module.css';

export default function SignUpForm(props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
  const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
  return (
    <form
      id='SignUpForm'
      className={Styles.SignUpForm}
      onSubmit={props.onSignUpFormSubmit}
    >
      <input
        className={inputStyles.join(' ')}
        type='text'
        id='fullName'
        name='name'
        placeholder='Full Name'
      />
      <input
        className={inputStyles.join(' ')}
        type='text'
        id='Email'
        placeholder='Email Address'
      />
      <input
        className={inputStyles.join(' ')}
        type='password'
        id='pass'
        placeholder='Create a Password'
      />
      <input
        className={inputStyles.join(' ')}
        type='password'
        id='pass'
        placeholder='Confirm Password'
      />
      <input
        className={inputStyles.join(' ')}
        type='text'
        id='phoneNum'
        placeholder='Phone Number'
      />
      <NavLink className={BaseStyles.Button} to='/aboutme' value='/showAboutMe'>
        Continue
      </NavLink>
      <NavLink className={signUpBtnClasses.join(' ')} to='/' value='return'>
        Back
      </NavLink>
    </form>
  );
}
