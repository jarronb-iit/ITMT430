import React, { Component } from 'react';
import Styles from '../SignUpForm/SignUpForm.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';

export default function UserType(props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];

  return (
    <form
      id='userType'
      className={Styles.SignUpForm}
      onSubmit={props.onSignUpFormSubmit}
    >
      <h1>Im Looking for property</h1>
      <h1>Im selling property</h1>
      <button value='showHomepage' onClick={props.changeVisibility}>
        Back
      </button>
      <button value='showAboutMeInfo' onClick={props.changeVisibility}>
        Finish
      </button>
    </form>
  );
}
