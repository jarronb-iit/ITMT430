import React, { Component } from 'react';
import Styles from '../SignUpForm/SignUpForm.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import HomeStyles from '../../Pages/Home/Home.module.css';
import TypeStyles from './UserType.module.css';
import { NavLink } from 'react-router-dom';

export default class UserType extends Component {
  state = {
    role: null
  };

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
    const continueButtonStyles = [BaseStyles.Button, HomeStyles.Button1];
    const backButtonStyles = [BaseStyles.Button, HomeStyles.Button2];
    return (
      <form id='userType' className={Styles.SignUpForm}>
        <h1
          name='Buying'
          className={TypeStyles.h1}
          onclick={this.onInputChangeHandler}
        >
          I'm Looking for property
        </h1>
        <h1
          name='Selling'
          className={TypeStyles.h2}
          onclick={this.onInputChangeHandler}
        >
          I'm selling property
        </h1>

        <section className={HomeStyles.container}>
          <NavLink
            className={continueButtonStyles.join(' ')}
            to='#'
            value='COMPLETE'
          >
            FINISH
          </NavLink>
          <NavLink
            className={backButtonStyles.join(' ')}
            to='/aboutme'
            value='/showAboutMe'
          >
            Back
          </NavLink>
        </section>
      </form>
    );
  }
}
