import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import grey from "@material-ui/core/colors/grey";

import { Menu, Github } from 'react-feather';

import SideDrawer from "./SideDrawer";
import Localisation from "./Localisation";

const styles = {
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: grey[900],
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    color: "white",
    margin: 10,
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
    const { classes, pos } = this.props;

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

        <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              aria-label="Menu"
              onClick={(event) => {toggleDrawer(true)}}
            >
              <Menu />
            </IconButton>

            <Localisation pos={pos} />
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
