import React, { Component } from "react";

class Localisation extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: {}
    }
  }

  render() {
    const { pos } = this.props;

    if (pos) {
      return (
        <ul>
          <li>latitude: {pos.latitude}</li>
          <li>longitude: {pos.longitude}</li>
        </ul>
      );
    } else {
      return <div>Localisation unavailable</div>;
    }
  }
}


export default Localisation
