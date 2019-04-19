import React, { Component } from 'react';
import Styles from './LoginForm.module.css';
import InputBaseStyles from '../../BaseStyles/Input.module.css';
import ButtonBaseStyles from '../../BaseStyles/Button.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { NavLink } from 'react-router-dom';


const loginStyleClasses = [ButtonBaseStyles.Button, Styles.SignUpBtn];

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClick = event => {
    event.preventDefault();
    let { email, password } = this.state;
    console.log(email, password);
    JSON.stringify(this.state);
    console.log(JSON.stringify(this.state));
    console.log(this.props.loginInit(email, password));
    // this.props.loadUser();
  };
  render() {
    const inputStyles = [
      InputBaseStyles.Input,
      Styles.Input,
      'browser-default'
    ];
    const loginButtonClasses = [ButtonBaseStyles.Button, ButtonBaseStyles.Blue];
    return (
      <form className={Styles.LoginForm}>
        <input
          className={inputStyles.join(' ')}
          name='email'
          type='text'
          id='logEmail'
          placeholder='Email Address'
          onChange={this.onInputChangeHandler}
        />
        <input
          className={inputStyles.join(' ')}
          name='password'
          type='password'
          id='logPass'
          placeholder='Password'
          onChange={this.onInputChangeHandler}
        />

       <button className={loginButtonClasses.join(' ')} onClick={this.onClick}>
          Login
      </button>




        <NavLink className={loginStyleClasses.join(' ')} to='/' value='return'>
          Back
        </NavLink>


      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    // state: reducerSlice.prop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginInit: (email, password) =>
      dispatch(actions.loginInit(email, password)),
    loadUser: () => dispatch(actions.loadUserInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
