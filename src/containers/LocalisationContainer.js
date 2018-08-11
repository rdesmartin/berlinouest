import React, { Component } from "react";
import { Link } from "react-router-dom";

import WallMap from "../components/Map";
import CoordInput from "../components/CoordInput";

import Localisation from "../components/Localisation";

class LocalisationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: {}
    };
    // this.handleChange = this.handleChange.bind(this);
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

  // handleChange(coord) {
  //   return (
  //     event => {
  //       this.setState((state) => { [coord]: event.target.value })
  //     }
  //   );
  // }

  render() {
    const {pos} = this.state;

    return (
      <div>
        <p>
          <Link to={{ pathname: '/home' }}>Home</Link>
        </p>
        <div style={ {display: "flex", flexFlow: "row nowrap"}} >
          <h1>Your position</h1>
        </div>
        <Localisation pos={pos} />
        {pos.coords &&
          <WallMap lat={pos.coords.latitude} lng={pos.coords.longitude}/>
        }
      </div>
      );
  }
}

export default LocalisationContainer;
