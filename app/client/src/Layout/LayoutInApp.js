import React, { Component } from 'react';
import AppBar from '../components/UI/AppBar';
import Drawer from '../components/UI/Drawer';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    minHeight: '100vh'
  }
});

class LayoutInApp extends Component {
  state = {
    showDrawer: false
  };

  onMenuClick = () => {};

  toggleDrawer = () => {
    this.setState({
      showDrawer: !this.state.showDrawer
    });
  };

  onDrawerClose = () => {
    this.setState({
      showDrawer: false
    });
  };

  onDrawerOpen = () => {
    this.setState({
      showDrawer: true
    });
  };

  render() {
    const { classes, children, history } = this.props;
    const { showDrawer } = this.state;

    return (
      <div className={classes.root}>
        <AppBar toggleDrawer={this.toggleDrawer} />
        <Drawer
          history={history}
          showDrawer={showDrawer}
          onOpen={this.onDrawerOpen}
          onClose={this.onDrawerClose}
        />
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(LayoutInApp);
