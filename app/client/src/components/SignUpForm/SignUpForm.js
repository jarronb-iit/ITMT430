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
    <div id='homePage'>
      <header> Roomie </header>
      <form>
        <input type='text' placeholder='Full Name' />
        <input type='text' placeholder='Email Address' />
        <input type='text' placeholder='Create a Password' />
        <input type='text' placeholder='Phone Number' />
      </form>
    </div>
  );
}
