import React, { Component } from 'react';
import Styles from './SignUpSuccess.module.css';
import { NavLink } from 'react-router-dom';
import BaseStyles from '../../BaseStyles/Input.module.css';
import HomeStyles from '../../Pages/Home/Home.module.css';

export default class SignUpSuccess extends Component {
  state = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    phoneNumber: null
  };

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
    const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
    const continueButtonStyles = [BaseStyles.Button, HomeStyles.Button1];
    const backButtonStyles = [BaseStyles.Button, HomeStyles.Button2];

    return (
      <div className={Styles.SignUpSuccess}>
        <h3>Your account has been succesfully created!</h3>

        <section className={HomeStyles.container}>
          <NavLink className={BaseStyles.Button} to="/Login" value="/showLogin">
            Login
          </NavLink>
        </section>
      </div>
    );
  }
}
