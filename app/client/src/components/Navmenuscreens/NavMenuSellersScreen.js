import React, { Component } from 'react';
import Styles from '../SignUpForm/SignUpForm.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import { NavLink } from 'react-router-dom';

export default function NavMenu (props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
  const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
  return ( <div>
    <h1>Home</h1>
    <hr></hr>
    <h1>Messages</h1>
    <h1>Favorites</h1>
    <h1>Profile</h1>
    <hr></hr>
    <h1>Seller Portal</h1>
    <h1>Settings</h1>
    <h1>Log Out</h1>
    </div>
  );
}
