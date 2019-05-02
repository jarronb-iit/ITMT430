import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LayoutInApp from '../../Layout/LayoutInApp';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    /*Photo by Buenosia Carol from Pexels*/
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

class HomePage extends Component {
  state = {};
  render() {
    const { history } = this.props;

    return (
      <LayoutInApp history={history}>
        <div>hey</div>
      </LayoutInApp>
    );
  }
}

export default withStyles(styles)(HomePage);
