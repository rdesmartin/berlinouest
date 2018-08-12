import React, { Component } from "react";
import PropTypes from "prop-types";

class Localisation extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { pos } = this.props;

    if (pos) {
      return (
        <ul>
          <li>latitude: {pos.lat}</li>
          <li>longitude: {pos.lng}</li>
        </ul>
      );
    } else {
      return <div>Localisation unavailable</div>;
    }
  }
}

Localisation.propTypes = {
  pos: PropTypes.object
}


export default Localisation
