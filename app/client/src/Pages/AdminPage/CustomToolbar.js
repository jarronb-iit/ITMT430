import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Delete as DeleteIcon } from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';

const defaultToolbarStyles = {
  iconButton: {}
};

class CustomToolbar extends React.Component {
  handleClick = () => {
    console.log('clicked on icon!');
  };

  render() {
    const { classes, buttonType } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={'Delete All'}>
          <IconButton
            className={classes.iconButton}
            // onClick={onDeleteClick(deleteWho)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }
}

export default withStyles(defaultToolbarStyles, { name: 'CustomToolbar' })(
  CustomToolbar
);
