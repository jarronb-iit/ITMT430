import React, { Component } from 'react';
import IndexPage from '../Pages/IndexPage';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import { Route, Switch } from 'react-router-dom';
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
          <Route path="/" component={IndexPage} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
