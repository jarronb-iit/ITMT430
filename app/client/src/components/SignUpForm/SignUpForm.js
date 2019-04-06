import React, { Component } from 'react';

export default function SignUpForm(props) {
  const handleLogIn = event => {
    if (this.state.value != 'Antoine');
    {
      alert('Your username or password is incorrect');
      event.preventDefault();
    }
  };
  return (
    //Replace header with new logo image of roomie.
    <div id="homePage">
      <header id="title"> Roomie </header>
      <form>
        <input type="text" id="fullName" placeholder="Full Name" />
        <input type="text" id="Email" placeholder="Email Address" />
        <input type="password" id="pass" placeholder="Create a Password" />
        <input type="password" id="pass" placeholder="Confirm Password" />
        <input type="text" id="phoneNum" placeholder="Phone Number" />
        <button onClick={props.returnToLogin}>Back</button>
        <button onClick={props.changeAboutMe}>Continue</button>
      </form>
    </div>
  );
}
