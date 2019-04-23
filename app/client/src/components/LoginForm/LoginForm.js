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
    this.props.loginInit(this.state, this.props.history);
    //  ***** Get all users---Admin*****
    // this.props.getUsers();

    //  ***** Delete all users---Admin*****
    // this.props.deleteUsers();

    //  ***** Get current users*****
    // this.props.loadUser();

    //  ***** Get all listings*****
    // this.props.getListings();

    //  ***** Make a listing*****
    // let listing = {
    //   address: {
    //     street: '4444 S. Main St.',
    //     city: 'Chicago',
    //     state: 'Illinois',
    //     zipCode: '60616'
    //   },
    //   price: '499',
    //   squareFootage: '1239',
    //   bedrooms: '3',
    //   bathrooms: '2',
    //   amenities: {
    //     wifi: 'true',
    //     heating: 'true',
    //     cooling: 'true',
    //     washer: 'true',
    //     indoorFireplace: 'true',
    //     parkingType: ['street', 'garage'],
    //     petsAllowed: ['Small dogs', 'Small Cats']
    //   },
    //   listingType: 'condo',
    //   name: 'Listing 1',
    //   photos: ['src/photos/url', 'src/photos/url2'],
    //   dateAvailable: '04-05-2019'
    // };
    // this.props.addListing(listing);

    //  ***** Update a Listing---CAn be any property of a listing*****
    // let listing = {
    //   price: '600',
    //   squareFootage: '1234'
    // };
    // this.props.updateListing('5cbea241998d5e0f3010c369', listing);
    // this.props.deleteUser();

    //  ***** Creating a user--- Required properties*****
    // let user = {
    //   email: 'test3@gmail.com',
    //   password: 'password',
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   phoneNumber: '123-456-7890',
    //   bio: 'Welcome, to rommie!',
    //   roles: ['buyer']
    // };
    // this.props.createUser(user);

    //  ***** Get a single listing*****
    // this.props.getListing('5cbea232998d5e0f3010c365');

    //  ***** Delete a single listing*****
    // this.props.deleteListing('5cbea4c3998d5e0f3010c36a');
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
          name="email"
          type="text"
          id="logEmail"
          placeholder="Email Address"
          onChange={this.onInputChangeHandler}
        />
        <input
          className={inputStyles.join(' ')}
          name="password"
          type="password"
          id="logPass"
          placeholder="Password"
          onChange={this.onInputChangeHandler}
        />

        <button className={loginButtonClasses.join(' ')} onClick={this.onClick}>
          Login
        </button>

        <NavLink className={loginStyleClasses.join(' ')} to="/" value="return">
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
    loginInit: (user, history) => dispatch(actions.loginInit(user, history)),
    loadUser: () => dispatch(actions.loadUserInit()),
    createUser: user => dispatch(actions.registerInit(user)),
    deleteUser: () => dispatch(actions.deleteUserInit()),
    getListings: () => dispatch(actions.getListingsInit()),
    addListing: listing => dispatch(actions.addListingInit(listing)),
    getUsers: () => dispatch(actions.getUsersInit()),
    deleteListings: () => dispatch(actions.deleteListingsInit()),
    deleteUsers: () => dispatch(actions.deleteUsersInit()),
    getListing: id => dispatch(actions.getListingInit(id)),
    deleteListing: id => dispatch(actions.deleteListingInit(id)),
    updateListing: (id, listing) =>
      dispatch(actions.updateListingInit(id, listing))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
