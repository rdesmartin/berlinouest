import React, { Component } from "react";
import { Link } from "react-router-dom";
import TestMap from "../components/Map";

import Localisation from "../components/Localisation";

class LocalisationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
         this.setState((state) => ({ pos: pos }));
      },
      (err) => console.log('Error: ' + err),
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }

  render() {
    const {pos} = this.state;

    return (
      <div>
        <p>
          <Link to={{ pathname: '/home' }}>Home</Link>
        </p>
        <h1>Your position</h1>
        <Localisation pos={pos} />
        {pos.coords &&
          <TestMap lat={pos.coords.latitude} lng={pos.coords.longitude}/>
        }
      </div>
      );
  }
}

export default LocalisationContainer;
