import React, { Component } from 'react';

export default function TellMe() {
  return (
    <div>
      <header id="title"> Roomie </header>
      <h2>Tell us a bit about you!</h2>
      <button>{/* onClick={props.returnToLogin} */}Back</button>
      <button>{/* onClick={props.changeAboutMe} */} Continue</button>
    </div>
  );
}
