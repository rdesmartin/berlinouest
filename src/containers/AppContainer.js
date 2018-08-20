import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";

import L from "leaflet";
import LeafletPip from "@mapbox/leaflet-pip";

import { setPosition } from "../actions";
import Header from "../components/Header";
import HomeView from "../components/HomeView";
import AboutView from "../components/AboutView";
import Map from "../components/Map";

var geojsonWall = require('../assets/BerlinWall.json'); // eslint-disable-line import/no-webpack-loader-syntax
var geojsonCity = require('../assets/Berlin.json'); // eslint-disable-line import/no-webpack-loader-syntax

class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: null,
      geojson: null,
    }
  }

  getSide(pos) {
    if (!pos || !geojsonWall || !geojsonCity) {
      return "UNKNOWN";
    }
    const gjWallLayer = L.geoJSON(geojsonWall);
    const gjCityLayer = L.geoJSON(geojsonCity);
    if (LeafletPip.pointInLayer(pos, gjWallLayer).length) {
      return "WEST";
    } else if (LeafletPip.pointInLayer(pos, gjCityLayer).length) {
      return "EAST";
    } else {
      return "OUTSIDE";
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
      this.props.setPosition(pos);
    }
  }

  static getDerivedStateFromProps(props, state) {
    var pos = null;

    if (props.coords) {
      pos = {
        lat: props.coords.latitude,
        lng: props.coords.longitude
      };
    if (pos !== state.pos)
      return { pos };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // lazy object comparison
    if (JSON.stringify(prevState.pos) !== JSON.stringify(this.state.pos)){
      this.props.setPosition(this.state.pos);
    }
  }

  render() {
    const { pos } = this.props;
    const side = this.getSide(pos);

    return (
      <div >
        <Header/>
        <Switch>
          <Route path="/about" component={AboutView} />

          <Route
            path="/map"
            render={ props => <Map geojsonCity={geojsonCity} geojsonWall={geojsonWall} /> }
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

const mapStateToProps = state => ({
  pos: state.pos
});

const mapDispatchToProps = {
  setPosition: setPosition,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(
  withRouter( // to fix redux's prevention of router update
    connect(mapStateToProps, mapDispatchToProps)(AppContainer)
  )
);
