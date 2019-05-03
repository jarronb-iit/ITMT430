import React, { Component } from 'react';
import LayoutInApp from '../../Layout/LayoutInApp';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import { FormatAlignLeft, Autorenew } from '@material-ui/icons';

const styles = theme => ({
  card: {
    //maxWidth: 600,
    alignItems: 'center'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
});

const tileData = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'First image',
    author: 'Bobby'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'second image',
    author: 'Lilly'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'second image',
    author: 'Lary'
  }
];

class ListingView extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    // this.props.getUsers();
    this.props.getListings();
  }

  render() {
    const { classes, data } = this.props;

    console.log(data.photos);

    return (
      <Card className={classes.card}>
        <CardHeader title={data.name} subheader={data.dateListed} />
        <CardContent>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
              {tileData.map(tile => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography component='p'>{data.address.street}</Typography>
              <Typography component='p'>
                {data.address.city} {data.address.state}, {data.address.zipCode}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component='p'>${data.price}</Typography>
              <Typography component='p'>{data.squareFootage} sf</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label='Show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography component='p'>Bathrooms: {data.bathrooms}</Typography>
            <Typography component='p'>Bedrooms: {data.bedrooms}</Typography>
            <Typography component='p'>
              Property Type: {data.listingType}
            </Typography>
            <Typography component='p'>
              Amenties: Cooling, heating, indoor fireplace
            </Typography>
            <Typography component='p'>
              This apartment has a Garage and a Street
            </Typography>
            <Typography component='p'>Pets are allowed</Typography>
            <Typography component='p'>Inhouse washer and dryer</Typography>
          </CardContent>
        </Collapse>
      </Card>
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
)(withStyles(styles)(ListingView));
