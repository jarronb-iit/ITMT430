import React, { Component } from 'react';
import Styles from './TellMeAboutYou.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import { NavLink } from 'react-router-dom';

export default function TellMe(props) {
  const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
  return (
    <div>
      <header id='title'> Roomie </header>
      <h2>Tell us a bit about you!</h2>
      <NavLink
        className={BaseStyles.Button}
        to='/usertype'
        value='/showAboutMe'
      >
        Continue
      </NavLink>
      <NavLink
        className={signUpBtnClasses.join(' ')}
        to='/signup'
        value='return'
      >
        Back
      </NavLink>
    </div>
  );
}
