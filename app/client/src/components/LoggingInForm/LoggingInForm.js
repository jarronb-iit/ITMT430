import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function LoggingInForm(props) {
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
          <input type='text' id='logEmail' placeholder='Email Address' />
        </Grid>
        <Grid item xs={12}>
          <input type='password' id='logPass' placeholder='Password' />
        </Grid>
        <Button
          variant='outlined'
          color='secondary'
          onClick={props.returnToLogin}
        >
          Back
        </Button>
      </form>
    </div>
  );
}
