import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FormattedMessage } from 'react-intl';

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

        <p>
          <FormattedMessage id="about.text"/>
        </p>
        <a href="https://github.com/rdesmartin/leaflet_reactjs_openstreetmap_berliner_mauer">
          <FormattedMessage id="about.githubLink"/>
        </a>
      </div>
    );
  }
}

AboutView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutView);
