import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import grey from "@material-ui/core/colors/grey";

import { Menu, Github } from 'react-feather';

import SideDrawer from "./SideDrawer";

const styles = {
  root: {
    backgroundColor: grey[900],
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    color: "white",
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }

  render() {
    const { classes } = this.props;

    const toggleDrawer = open => {
      this.setState({drawerOpen: open});
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <SideDrawer
            open={this.state.drawerOpen}
            toggleDrawer={toggleDrawer}
          />
        
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              aria-label="Menu"
              onClick={(event) => {toggleDrawer(true)}}
            >
              <Menu />
            </IconButton>

            <Typography variant="title" className={classes.flex}>
              Berlin
            </Typography>

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="GitHub"
              href="https://github.com/rdesmartin/leaflet_reactjs_openstreetmap_berliner_mauer" target="_blank"
            >
              <Github />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
  pos: PropTypes.object,
};

export default withStyles(styles)(Header);
