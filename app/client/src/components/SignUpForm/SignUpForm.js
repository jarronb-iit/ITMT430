import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

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
      <header id='title'> Roomie </header>
      <form>
        <Grid item xs={12}>
          <input type='text' id='fullName' placeholder='Full Name' />
        </Grid>
        <Grid item xs={12}>
          <input type='text' id='Email' placeholder='Email Address' />
        </Grid>
        <Grid item xs={12}>
          <input type='text' id='createPass' placeholder='Create a Password' />
        </Grid>
        <Grid item xs={12}>
          <input type='text' id='phoneNum' placeholder='Phone Number' />
        </Grid>
      </form>
    </div>
  );
}
