import React, { Component } from 'react';
import Styles from './TellMeAboutYou.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import ButtonBaseStyles from '../../BaseStyles/Button.module.css';
import { NavLink } from 'react-router-dom';

export default function TellMe(props) {
  const loginStyleClasses = [ButtonBaseStyles.Button, Styles.SignUpBtn];
  const loginButtonClasses = [ButtonBaseStyles.Button, ButtonBaseStyles.Blue];
  return (
    <div>

      <h2 className = {Styles.h2}>Tell us a bit about you!</h2>
      <NavLink
        className={loginButtonClasses.join(' ')}
        to='/usertype'
        value='/showAboutMe'
      >
        Continue
      </NavLink>
      <NavLink
        className={loginStyleClasses.join(' ')}
        to='/signup'
        value='return'
      >
        Back
      </NavLink>
    </div>
  );
}
