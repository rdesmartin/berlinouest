import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from '@material-ui/core/IconButton';
import Divider from "@material-ui/core/Divider";

import { ArrowLeft } from 'react-feather';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: "white",
    marginLeft: -12,
    marginRight: 20,
  },
};

class SideDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, open, toggleDrawer } = this.props;

    const sideList = (
      <div className={classes.list}>
        <ul>
          <li><Link to={{ pathname: '/map' }}>Map</Link></li>
          <li><Link to={{ pathname: '/about' }}>About</Link></li>
          <li><Link to={{ pathname: '/' }}>Home</Link></li>
        </ul>
      </div>
    );

    const handleClose = event => {toggleDrawer(false)};

    return (
      <div>
        <Drawer open={open} onClose={handleClose}>
          <IconButton
            className={classes.menuButton}
            aria-label="Back"
            onClick={handleClose}
          >
            <ArrowLeft />
          </IconButton>

          {sideList}

        </Drawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.function,
};

export default withStyles(styles)(SideDrawer);
