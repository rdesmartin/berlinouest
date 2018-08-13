import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from '@material-ui/core/IconButton';
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import grey from "@material-ui/core/colors/grey";

import { ArrowLeft } from 'react-feather';


const styles = {
  list: {
    width: "250",
  },
  drawer: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    color: grey[800],
  },
};

// inject history because for some reason react-router <Link> component does
// not work in MenuItems
const SideList = withRouter(({ history, classes, toggleDrawer }) => (
  <div className={classes.list}>
    <MenuItem
    onClick={() => {
      history.push('/');
      toggleDrawer(false);
     }}
    >
      Home
    </MenuItem>
    <MenuItem
      onClick={() => {
        history.push('/map');
        toggleDrawer(false);
      }}
    >
      Map
    </MenuItem>
    <MenuItem
      onClick={() => {
        history.push('/about');
        toggleDrawer(false);
      }}
    >
      About
    </MenuItem>
  </div>
));


class SideDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, open, toggleDrawer } = this.props;

    const handleClose = event => {toggleDrawer(false)};

    return (
      <div>
        <Drawer className={classes.drawer} open={open} onClose={handleClose}>
          <IconButton
            className={classes.backButton}
            aria-label="Back"
            onClick={handleClose}
          >
            <ArrowLeft />
          </IconButton>
          <SideList toggleDrawer={toggleDrawer} classes={classes} />
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
