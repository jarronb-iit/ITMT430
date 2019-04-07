import React, { Component } from 'react';
import Styles from './LoginForm.module.css';

export default function LoginForm(props) {
  const handleLogIn = event => {
    if (this.state.value != 'Antoine');
    {
      alert('Your username or password is incorrect');
      event.preventDefault();
    }
  };
  return (
    //Replace header with new logo image of roomie.
    <div className={Styles.LoginForm}>
      <input
        className={Styles.Input}
        type="text"
        id="logEmail"
        placeholder="Email Address"
      />
      <input
        className={Styles.Input}
        type="password"
        id="logPass"
        placeholder="Password"
      />
      <button
        onClick={props.changeVisibility}
        value="showHomepage"
      >
        Back
      </button>
    </div>
  );
}
