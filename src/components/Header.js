import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import grey from "@material-ui/core/colors/grey";

import { Menu as MenuIcon, Github, Compass } from "react-feather";

import { setPosition } from "../actions"

import SideDrawer from "./SideDrawer";
import CoordInput from "./CoordInput";

const styles = {
  root: {
    height: "56px",
  },
  toolbar: {
    backgroundColor: grey[900],
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    color: "white",
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      menuAnchorEl: null,
    }
  }

  handleMenuOpen = event => {
   this.setState({ menuAnchorEl: event.currentTarget });
  };
  
  handleMenuClose = event => {
    this.setState({ menuAnchorEl: null });
  };

  handleSubmit = pos => {
    this.setState({ menuAnchorEl: null });
    this.props.setPosition(pos);
  }

  render() {
    const { classes, pos } = this.props;
    const { menuAnchorEl, drawerOpen } = this.state;

    const toggleDrawer = open => {
      this.setState({drawerOpen: open});
    };

    return (
      <div>
        <AppBar position="static">
          <SideDrawer
            open={drawerOpen}
            toggleDrawer={toggleDrawer}
          />
          
          {menuAnchorEl && 
          <Menu
            id="simple-menu"
            anchorEl={menuAnchorEl}
            anchorOrigin={{vertical: "bottom", horizontal: "left"}}
            getContentAnchorEl={null}
            open={Boolean(menuAnchorEl)}
          >
            <CoordInput pos={pos} handleSubmit={this.handleSubmit} handleMenuClose={this.handleMenuClose}/>
          </Menu>}
          
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              aria-label="Menu"
              onClick={(event) => {toggleDrawer(true)}}
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Localisation"
              onClick={this.handleMenuOpen}
            >
              <Compass />
            </IconButton>

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="GitHub"
              href="https://github.com/rdesmartin/leaflet_reactjs_openstreetmap_berliner_mauer" 
              target="_blank"
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

const MapStateToProps = state => ({
  pos: state.pos
});

const MapDispatchToProps = {
  setPosition: setPosition
}

export default withStyles(styles)(
  connect(MapStateToProps, MapDispatchToProps)(Header)
  );
