import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/core/IconButton';
import { Compass } from 'react-feather';

const styles = {
  container: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    color: "white",
  },
}

class Localisation extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { pos, classes } = this.props;

    return (
      <div className={classes.container}>
        <Icon
          style={{color: "white"}}
          aria-label="Localisation"
        >
          <Compass />
        </Icon>
        { pos &&
        <div>
            <div>latitude: {pos.lat}</div>
            <div>longitude: {pos.lng}</div>
          </div>
        }
        { !pos &&
          <div>Localisation unavailable</div>
        }
      </div>
    );
  }
}

Localisation.propTypes = {
  pos: PropTypes.object
}


export default withStyles(styles)(Localisation)
