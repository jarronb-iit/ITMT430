import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function LoginButtons(props) {
  return (
    //Replace header with new logo image of roomie.
    <div id='homePage'>
      <header id='title'> Roomie </header>
      <form>
        <Grid xs={12}>
          <Button id='login'>Login</Button>
        </Grid>
        <Grid xs={12}>
          <Button id='signUp' onClick={props.loginRequest}>
        Sign Up
          </Button>
        </Grid>
      </form>
    </div>
  );
}
