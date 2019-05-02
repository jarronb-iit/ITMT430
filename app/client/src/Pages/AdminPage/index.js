import React, { Component } from 'react';
import LayoutInApp from '../../Layout/LayoutInApp';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import UsersDataTable from './UsersDataTable';
import ListingsDataTable from './ListingsDataTable';
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    margin: '10px'
  }
});

class ReactAdmin extends Component {
  state = {
    showUsers: true,
    showListings: false
  };

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: '#FF000',
            overflowX: 'scroll',
            position: 'static',
            width: '100vh'
          },
          paper: {
            boxShadow: 'none'
          }
        }
      }
    });

  componentDidMount() {
    this.props.getUsers();
    this.props.getListings();
  }

  onToggleData = dataSet => e => {
    if (dataSet === 'users') {
      this.setState({
        showUsers: true,
        showListings: false
      });
    } else {
      this.setState({
        showUsers: false,
        showListings: true
      });
    }
  };

  transformUsersData = users => {
    return users.map(user => {
      return [user._id, user.email];
    });
  };

  rowsDeleted = rowsDeleted => {
    console.log(rowsDeleted);
  };

  render() {
    let { history, users, listings, classes } = this.props;
    let { showUsers, showListings } = this.state;
    let data;
    let toggleButton;
    let renderedComponent;

    if (showUsers) {
      data = users;
      renderedComponent = <UsersDataTable data={data} />;
      toggleButton = (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.onToggleData('listings')}
        >
          Switch to Listings
        </Button>
      );
    } else {
      data = listings;
      renderedComponent = <ListingsDataTable data={data} />;
      toggleButton = (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.onToggleData('users')}
        >
          Switch to Users
        </Button>
      );
    }
    console.log(showUsers);

    return (
      <LayoutInApp history={history}>
        {toggleButton}
        <MuiThemeProvider theme={this.getMuiTheme()}>
          {renderedComponent}
        </MuiThemeProvider>
      </LayoutInApp>
    );
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings.listings,
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(actions.getUsersInit()),
    getListings: () => dispatch(actions.getListingsInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ReactAdmin));
