import React, { Component } from 'react';
import IndexPage from '../Pages/IndexPage';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import CreateListingPage from '../Pages/CreateListingPage';
import AdminPage from '../Pages/AdminPage';
import HomePage from '../Pages/HomePage';
import LogoutPage from '../Pages/LogoutPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from '../hoc/ProtectedRoute';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minHeight: '100vh'
  }
});

class Layout extends Component {
  render() {
    const { classes, auth } = this.props;
    const { isAuthenticated } = auth;
    return (
      <div className={classes.root}>
        <Switch>
          <Route
            path="/"
            exact
            component={props =>
              isAuthenticated ? (
                <Redirect to="/home" />
              ) : (
                <IndexPage {...props} />
              )
            }
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <ProtectedRoute
            path="/createListing"
            component={CreateListingPage}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/admin"
            component={AdminPage}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/home"
            component={HomePage}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/logout"
            component={LogoutPage}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/" component={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
