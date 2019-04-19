import React, { Component } from 'react';
import Styles from '../SignUpForm/SignUpForm.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import HomeStyles from '../../Pages/Home/Home.module.css';
import TypeStyles from './UserType.module.css';
import { NavLink } from 'react-router-dom';

export default function UserType(props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
  const continueButtonStyles = [BaseStyles.Button, HomeStyles.Button1];
  const backButtonStyles = [BaseStyles.Button, HomeStyles.Button2];
  return (
    <form
      id='userType'
      className={Styles.SignUpForm}
      onSubmit={props.onSignUpFormSubmit}
    >
      <h1 className={TypeStyles.h1}>I'm Looking for property</h1>
      <h1 className={TypeStyles.h2}>I'm selling property</h1>

      <section className={HomeStyles.container}>

      
      <NavLink className={continueButtonStyles.join(" ")} to='#' value='COMPLETE'>
        FINISH
      </NavLink>
      <NavLink className={backButtonStyles.join(" ")} to='/aboutme' value='/showAboutMe'>
        Back
      </NavLink>

      </section>

    </form>
  );
}
