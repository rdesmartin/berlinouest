import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import { geolocated } from "react-geolocated";

import L from "leaflet";
import LeafletPip from "@mapbox/leaflet-pip";

import Header from "../components/Header";
import HomeView from "../components/HomeView";
import AboutView from "../components/AboutView";
import Map from "../components/Map";
import Localisation from "../components/Localisation";

var geojson = require('../assets/BerlinWall.json'); // eslint-disable-line import/no-webpack-loader-syntax

class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: null,
      geojson: null,
    }
  }

  getSide(pos) {
    if (!pos || !geojson) {
      return "UNKNOWN";
    }
    const gjLayer = L.geoJSON(geojson);
    if (LeafletPip.pointInLayer(pos, gjLayer).length) {
      return "WEST";
    } else {
      return "EAST";
    }
  }

  componentDidMount() {
    var pos = null;

    if (this.props.coords) {
      pos = {
        lat: this.props.coords.latitude,
        lng: this.props.coords.longitude
      };
    }

    if (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled) {
      this.setState({
        ...this.state,
        pos,
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    var pos = null;

    if (props.coords) {
      pos = {
        lat: props.coords.latitude,
        lng: props.coords.longitude
      };
    }

    return {
      ...state,
      pos,
    };
  }

  render() {
    const { pos, geolocAvailable, geolocEnabled } = this.state;
    const { children } = this.props;
    const side = this.getSide(pos);

    return (
      <div>
        <Header />
        <Localisation pos={pos} />
        <Switch>
          <Route path="/about" component={AboutView} />

          <Route
            path="/map"
            render={ props => <Map pos={pos} /> }
          />

          <Route
            path="/"
            render={ props => <HomeView {...props} side={side} />}
          />
        </Switch>
      </div>
      );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(AppContainer);
