import React, { Component } from 'react';
import LoginButtons from '../../components/LoginPageButtons/LoginButtons';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
//import LoggingInForm from '../../components/LoggingInForm/LoggingInForm';
import './Home.css';

export default class Home extends Component {
  state = {
    changeToSignUp: true
  };
  changeVisibility = () => {
    if (this.state.changeToSignUp) {
      this.setState({
        changeToSignUp: !this.state.changeToSignUp
      });
    } else {
      this.setState({ changeToSignUp: true });
    }
  };
  render() {
    let exeComp;
    if (this.state.changeToSignUp) {
      exeComp = (
        //Replace header with new logo image of roomie.
        <LoginButtons loginRequest={this.changeVisibility} />
        //<LoggingInForm />
      );
    } else {
      exeComp = (
        //Replace header with new logo image of roomie.
        <SignUpForm returnToLogin={this.changeVisibility} />
      );
    }

    return <div>{exeComp}</div>;
  }
}
