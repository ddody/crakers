import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  appBar: {
    boxShadow: 'none'
  },
  bar: {
    backgroundColor: '#fff',
    borderBottomWidth: '1px',
    borderBottomColor: '#e9e9e9',
    borderStyle: 'solid'
  },
  title: {
    flex: '1',
    textAlign: 'center',
    // fontSize: theme.typography.pxToRem(15),
    fontWeight: '500',
    color: '#000003',
    letterSpacing: '-0.075em'
  },
  prevButton: {
    position: 'absolute',
    left: '0',
    color: '#000'
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.bar}>
            <IconButton
              className={classes.prevButton}
              color="inherit"
              aria-label="back">
              <ArrowBackIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit">
              {this.props.heading}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
