import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    textAlign: "center",
  }
};

class AboutView extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <h1>Berlin Wall App</h1>
        <p>This program uses React-Leaflet, React.js and Openstreetmap data to
          tell if you are currently in West Berlin or not.</p>
        <a href="https://github.com/rdesmartin/leaflet_reactjs_openstreetmap_berliner_mauer">
          View project on GitHub
        </a>
      </div>
    );
  }
}

AboutView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutView);
