import React, { Component } from 'react';

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
    <div id="homePage">
      <header id="title"> Roomie </header>
      <form>
        <input type="text" id="logEmail" placeholder="Email Address" />
        <input type="password" id="logPass" placeholder="Password" />
        <button onClick={props.returnToLogin}>Back</button>
      </form>
    </div>
  );
}
