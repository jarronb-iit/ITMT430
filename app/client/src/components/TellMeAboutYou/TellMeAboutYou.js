import React, { Component } from 'react';
import Styles from './TellMeAboutYou.module.css';

export default function TellMe(props) {
  return (
    <div>
      <header id="title"> Roomie </header>
      <h2>Tell us a bit about you!</h2>
      <button value="showSignup" onClick={props.changeVisibility}>
        {/* onClick={props.returnToLogin} */}Back
      </button>
      <button>{/* onClick={props.changeAboutMe} */} Continue</button>
    </div>
  );
}
