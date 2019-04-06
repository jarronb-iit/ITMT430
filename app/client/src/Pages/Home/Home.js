import React, { Component } from 'react';
import LoginButtons from '../../components/LoginPageButtons/LoginPageButtons';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AboutMeInfo from '../../components/TellMeAboutYou/TellMe';
import LoggingInForm from '../../components/LoggingInForm/LoggingInForm';
// import Styles from './Home.module.css';
import Styles from './Home.module.css';
//Styles.Homepage
export default class Home extends Component {
  state = {
    changeToSignUp: true,
    changeToAboutMe: true
  };
  changeVisibility = () => {
    if (this.state.changeToSignUp) {
      this.setState({
        changeToSignUp: !this.state.changeToSignUp
      });
    } else {
      this.setState({
        changeToSignUp: true
      });
    }
    if (this.state.changeToAboutMe) {
      this.setState({
        changeToAboutMe: !this.changeToAboutMe
      });
    } else {
      this.setState({
        changeToAboutMe: true
      });
    }
  };

  render() {
    let exeComp;
    if (this.state.changeToSignUp) {
      exeComp = (
        //Replace header with new logo image of roomie.
        <LoginButtons
          signUpRequest={this.changeVisibility}
          loginRequest={this.changeToAboutMe}
        />
      );
    } else {
      if (this.state.changeToAboutMe) {
        exeComp = (
          <SignUpForm
            returnToLogin={this.changeVisibility}
            changeAboutMe={this.changeToAboutMe}
          />
        );
      } else {
        exeComp = <AboutMeInfo />;
      }
    }
    return <div className={Styles.Home}>{exeComp}</div>;
  }
}
