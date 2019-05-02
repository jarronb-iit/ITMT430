import React, { Component } from 'react';
import IndexPage from '../Pages/IndexPage';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import CreateListingPage from '../Pages/CreateListingPage';
import AdminPage from '../Pages/AdminPage';
import HomePage from '../Pages/HomePage';
import LogoutPage from '../Pages/LogoutPage';
import { Route, Switch, Redirect } from 'react-router-dom';
// import ProtectedRoute from '../hoc/ProtectedRoute';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minHeight: '100vh'
  }
});

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/createListing" component={CreateListingPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/" exact component={IndexPage} />
          <Route path="/" component={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
