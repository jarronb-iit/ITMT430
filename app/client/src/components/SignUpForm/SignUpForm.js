import React, { Component } from 'react';
import Styles from './SignUpForm.module.css';
import { NavLink } from 'react-router-dom';
import BaseStyles from '../../BaseStyles/Input.module.css';
import HomeStyles from '../../Pages/Home/Home.module.css';

export default function SignUpForm(props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
  const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
  const continueButtonStyles = [BaseStyles.Button, HomeStyles.Button1];
  const backButtonStyles = [BaseStyles.Button, HomeStyles.Button2];
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

      <section className={HomeStyles.container}>

      <NavLink className={continueButtonStyles.join(" ")} to='/aboutme' value='/showAboutMe'>
        Continue
      </NavLink>
      <NavLink className={backButtonStyles.join(" ")} to='/' value='return'>
        Back
      </NavLink>

      </section>
    </form>
  );
}
