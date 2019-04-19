import React, { Component } from 'react';
import Styles from './SignUpForm.module.css';
import { NavLink } from 'react-router-dom';
import BaseStyles from '../../BaseStyles/Input.module.css';
import HomeStyles from '../../Pages/Home/Home.module.css';

export default class SignUpForm extends Component {
  state = {
    email: null,
    phoneNumber: null,
    firstName: null,
    lastName: null,
    password: null
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
      <div className={Styles.SignUpForm}>
        <input
          className={inputStyles.join(' ')}
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          onChange={this.onInputChangeHandler}
        />
        <input
          className={inputStyles.join(' ')}
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          onChange={this.onInputChangeHandler}
        />
        <input
          className={inputStyles.join(' ')}
          type='text'
          id='Email'
          placeholder='Email Address'
          name='email'
          onChange={this.onInputChangeHandler}
        />
        <input
          className={inputStyles.join(' ')}
          type='password'
          id='pass'
          name='password'
          placeholder='Create a Password'
          onChange={this.onInputChangeHandler}
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
          name='phoneNumber'
          placeholder='Phone Number'
          onChange={this.onInputChangeHandler}
        />

        <section className={HomeStyles.container}>
          <NavLink
            className={continueButtonStyles.join(' ')}
            to='/aboutme'
            value='/showAboutMe'
            onClick={event => this.props.getCurrentState(event, this.state)}
          >
            Continue
          </NavLink>
          <NavLink className={backButtonStyles.join(' ')} to='/' value='return'>
            Back
          </NavLink>
        </section>
      </div>
    );
  }
}
