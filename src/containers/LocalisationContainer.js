import React, { Component } from "react";
import { Link } from "react-router-dom";

import WallMap from "../components/Map";
import CoordInput from "../components/CoordInput";

import { geolocated } from "react-geolocated";

import Localisation from "../components/Localisation";

class LocalisationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      geolocAvailable: false,
      geolocEnabled: false,
      pos: {}
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.isGeolocationAvailable) {
      this.setState({...this.state, geolocAvailable: true});
      if (this.props.isGeolocationEnabled) {
        this.setState({...this.state, geolocEnabled: true, pos: this.props.coords});
      }
    }
  }

  // handleChange(coord) {
  //   return (
  //     event => {
  //       this.setState((state) => { [coord]: event.target.value })
  //     }
  //   );
  // }

  static getDerivedStateFromProps(props, state) {
    return { ...state, pos: props.coords };
  }

  render() {
    const { pos, geolocAvailable, geolocEnabled } = this.state;

    return (
      <div>
        <p>
          <Link to={{ pathname: '/home' }}>Home</Link>
        </p>
        <div style={ {display: "flex", flexFlow: "row nowrap"}} >
          <h1>Your position</h1>
        </div>
        {}
        <Localisation pos={pos} />
        {pos &&
          <WallMap lat={pos.latitude} lng={pos.longitude}/>
        }
      </div>
      );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(LocalisationContainer);
