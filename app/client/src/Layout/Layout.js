import React, { Component } from 'react';
import IndexPage from '../Pages/IndexPage';
import Index from '../Pages/IndexPage';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../hoc/ProtectedRoute';
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
          <Route path="/" component={Index} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
