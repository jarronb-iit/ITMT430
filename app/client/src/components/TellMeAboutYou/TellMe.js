import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function TellMe() {
  return (
    <div>
      <header id='title'> Roomie </header>
      <h2>Tell us a bit about you!</h2>
      <Grid item xs={12}>
        <TextField
          id='outlined-textarea'
          label='About You'
          placeholder='Use this space to describe yourself... '
          multiline
          margin='normal'
          variant='outlined'
        />
      </Grid>
      <Button
        variant='outlined'
        color='secondary'
        //onClick={props.returnToLogin}
      >
        Back
      </Button>
      <Button
        variant='outlined'
        color='primary'
        //onClick={props.changeAboutMe}
      >
        Continue
      </Button>
    </div>
  );
}
