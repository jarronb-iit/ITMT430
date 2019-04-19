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
    event.preventDefault();
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
        <button
          name='role'
          value='Buying'
          className={TypeStyles.h1}
          onClick={this.onInputChangeHandler}
        >
          I'm Looking for property
        </button>
        <button
          name='role'
          value='Selling'
          className={TypeStyles.h2}
          onClick={this.onInputChangeHandler}
        >
          I'm selling property
        </button>

        <section className={HomeStyles.container}>
          <NavLink
            className={continueButtonStyles.join(' ')}
            to='#'
            value='COMPLETE'
            onClick={event => this.props.getCurrentState(event, this.state)}
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
