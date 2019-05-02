import React, { Component } from 'react';
import LayoutInApp from '../../Layout/LayoutInApp';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import UsersDataTable from './UsersDataTable';
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

class ReactAdmin extends Component {
  state = {};

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
        },
        MUIDataTableBodyCell: {
          root: {
            // backgroundColor: '#FF0000'
          },
          responsiveStacked: {
            '@media screen and (min-width: 100px)': {
              border: 'solid 2px rgba(0, 0, 0, 0.15)'
            }
          }
        },
        MUIDataTableFilterList: {
          '& + div': {
            overflow: 'scroll',
            position: 'static'
          }
        }
      }
    });

  componentDidMount() {
    this.props.getUsers();
    this.props.getListings();
  }

  static getDerivedStateFromProps(props, state) {}

  transformUsersData = users => {
    return users.map(user => {
      return [user._id, user.email];
    });
  };

  rowsDeleted = rowsDeleted => {
    console.log(rowsDeleted);
  };

  render() {
    let { history, users, listings } = this.props;
    let data;

    if (users) {
      // users = this.transformUsersData(users);
      data = users;
    }

    return (
      <LayoutInApp history={history}>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <UsersDataTable data={data} />
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
