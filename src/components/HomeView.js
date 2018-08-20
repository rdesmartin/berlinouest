import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
  button: {
    margin: "20px",
  }
};

class HomeView extends Component {
  render() {
    const { classes, side } = this.props;

    return (
      <div className={classes.container}>
        <h1>Welcome</h1>
        <div>You are in the {side} side of Berlin</div>
        <Button
          className={classes.button}
          variant="outlined"
          disabled={side === "UNKNOWN"}
          component={Link}
          to="/map"
        >
          View on map
        </Button>
      </div>
      );
  }
}

HomeView.propTypes = {
  classes: PropTypes.object.isRequired,
  side: PropTypes.string,
}

export default withStyles(styles)(HomeView);
