//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import LeafletPip from "@mapbox/leaflet-pip";

var geojson = require('../assets/BerlinWall.json'); // eslint-disable-line import/no-webpack-loader-syntax

class WallMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: null,
      zoom: 13,
      geojson: null,
    }
  }

  componentDidMount() {
    const pos = this.props.pos ? this.props.pos.coords : null;
    this.setState({
      ...this.state,
      pos,
      geojson,
    });
  }

  static getDerivedStateFromProps(props, state) {
    return { ...state, pos: props.pos };
  }

  render() {
    const { pos, geojson } = this.state;

    return (
      <div>
        {pos &&
        <Map center={pos} zoom={this.state.zoom} style={{height: "500px"}}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            geojson &&
              <GeoJSON data={geojson} />
          }
          <Marker position={pos}>
            <Popup>
              <div>You are here</div>
            </Popup>
          </Marker>
        </Map>
        }
        {!pos && <div>Unable to find your location</div>}
      </div>
    )
  }
}

WallMap.propTypes = {
  pos: PropTypes.object,
};

export default WallMap;
