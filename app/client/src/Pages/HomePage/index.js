import React, { Component } from 'react';
import LayoutInApp from '../../Layout/LayoutInApp';

export default class index extends Component {
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
