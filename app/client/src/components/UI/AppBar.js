import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow3: {
    flexGrow: 5
  },
  grow: {
    flexGrow: 1
  },
  link: {
    color: '#fff'
  }
});

const HomeLink = props => <RouterLink to="/home" {...props} />;
const MyLink = props => <RouterLink to="/open-collective" {...props} />;
const MyLLink = props => <RouterLink to="/open-collective" {...props} />;

class PrimarySearchAppBar extends React.Component {
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow3}>
              Roomie
            </Typography>

            <Link
              component={HomeLink}
              className={[this.props.classes.link, classes.grow].join(' ')}
            >
              Home
            </Link>
            <Link
              component={MyLink}
              className={[this.props.classes.link, classes.grow].join(' ')}
            >
              Link
            </Link>
            <Link
              component={MyLink}
              className={[this.props.classes.link, classes.grow].join(' ')}
            >
              Link
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  // classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
