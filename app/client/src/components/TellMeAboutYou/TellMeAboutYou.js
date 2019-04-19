import React, { Component } from 'react';
import Styles from './TellMeAboutYou.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import ButtonBaseStyles from '../../BaseStyles/Button.module.css';
import HomeStyles from '../../Pages/Home/Home.module.css';
import { NavLink } from 'react-router-dom';

export default class TellMe extends Component {
  state = {
    bio: null
  };

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const continueButtonStyles = [BaseStyles.Button, HomeStyles.Button1];
    const backButtonStyles = [BaseStyles.Button, HomeStyles.Button2];
    return (
      <div>
        <h2 className={Styles.h2}>Tell us a bit about you!</h2>

        <div className={Styles.form}>
          <textarea
            className={Styles.input}
            cols='20'
            rows='50'
            name='bio'
            placeholder='I am pretty cool...'
            onChange={this.onInputChangeHandler}
          />
        </div>

        <section className={HomeStyles.container}>
          <NavLink
            className={continueButtonStyles.join(' ')}
            to='/usertype'
            value='/showAboutMe'
            onClick={event => this.props.getCurrentState(event, this.state)}
          >
            Continue
          </NavLink>
          <NavLink
            className={backButtonStyles.join(' ')}
            to='/signup'
            value='return'
          >
            Back
          </NavLink>
        </section>
      </div>
    );
  }
}
