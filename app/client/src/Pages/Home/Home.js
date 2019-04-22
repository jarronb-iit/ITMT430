import React, { Component } from 'react';
import HomepageButtons from '../../components/HomePageButtons/HomePageButtons';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AboutMeInfo from '../../components/TellMeAboutYou/TellMeAboutYou';
import LoginForm from '../../components/LoginForm/LoginForm';
import UserType from '../../components/UserType/UserType';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import Styles from './Home.module.css';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Navmenu from '../../components/Navmenuscreens/Navmenu';
import NavMenuSellersScreen from '../../components/Navmenuscreens/NavMenuSellersScreen';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Test extends Component {
  state = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    bio: null,
    roles: null
  };

  getCurrentState = (event, state) => {
    // event.preventDefault();
    console.log(event);
    console.log({ ...state });
    this.setState({
      ...this.state,
      ...state
    });
    console.log(this.state);
  };

  finishNewUser = (event, state) => {
    // event.preventDefault();
    console.log(event);
    console.log({ ...state });
    this.setState({
      ...this.state,
      ...state
    });
    console.log(this.state);

    this.props.createUser(this.state);
  };

  generateNewUser = () => {
    this.props.createUser(this.state);
  };

  changePage = event => {
    console.log(event);
  };

  // TODO:
  // eventHandler = (event) => {
  //   let user = {
  //     email: 'test3@gmail.com',
  //     password: 'password',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     phoneNumber: '123-456-7890',
  //     bio: 'Welcome, to rommie!',
  //     roles: ['buyer']
  //   };
  //   this.props.createUser(user);
  // }

  render() {
    return (
      <div className={Styles.Home}>
        <header className={Styles.Title}>Roomie </header>
        <Switch>
          {/* PROTECTED ROUTE EXAMPLE */}
          {/* <ProtectedRoute path="/signup" exact component={SignUpForm} /> */}
          <Route
            path='/signup'
            exact
            component={() => (
              <SignUpForm getCurrentState={this.getCurrentState} />
            )}
          />
          <Route
            path='/aboutme'
            exact
            component={() => (
              <AboutMeInfo getCurrentState={this.getCurrentState} />
            )}
          />
          <Route path='/login' exact component={LoginForm} />
          <Route path='/' exact component={HomepageButtons} />
          <Route
            path='/userType'
            exact
            component={() => <UserType finishNewUser={this.finishNewUser} />}
          />
          <Route
            path='/NavMenuSellersScreen'
            exact
            component={NavMenuSellersScreen}
          />
        </Switch>
      </div>
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
    createUser: user => dispatch(actions.registerInit(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
