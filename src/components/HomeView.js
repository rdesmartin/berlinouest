import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import CircularProgress from "@material-ui/core/CircularProgress";
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
    constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
    this.timer = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 10000);
  }

  render() {
    const { classes, side, intl } = this.props;

    return (
      <div className={classes.container}>
        <h1> <FormattedMessage id="home.welcome" /></h1>
        {
          side === "UNKNOWN" && this.state.loading &&
            <CircularProgress/>
        }
        {
          side === "UNKNOWN" && !this.state.loading &&
            intl.formatMessage({id: "error.pos.unavailable"})
        }
        {
          side !== "UNKNOWN" &&
            <div className={classes.container}>
              {intl.formatMessage({id: "home.side." + side})}
              <Button
                className={classes.button}
                variant="outlined"
                disabled={side === "UNKNOWN"}
                component={Link}
                to="/map"
              >
                <FormattedMessage id="home.button.label"/>
              </Button>
            </div>
        }
      </div>
      );
  }
}

HomeView.propTypes = {
  classes: PropTypes.object.isRequired,
  side: PropTypes.string,
  intl: intlShape.isRequired
}

export default withStyles(styles)(injectIntl(HomeView));
