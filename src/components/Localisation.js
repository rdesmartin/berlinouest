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

    if (pos.coords) {
      return (
        <ul>
          <li>latitude: {pos.coords.latitude}</li>
          <li>longitude: {pos.coords.longitude}</li>
        </ul>
      );
    } else {
      return <div>please give auth</div>;
    }
  }
}


export default Localisation
