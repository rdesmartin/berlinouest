//@flow
import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import LeafletPip from "@mapbox/leaflet-pip";

var geojson = require('../assets/BerlinWall.json'); // eslint-disable-line import/no-webpack-loader-syntax

const RenderSide = ({inWest}) => {
  console.log(inWest);

  var side = "";
  if (inWest) {
    side = "WEST";
  } else {
    side = "EAST";
  }
  return <div>You are in {side} BERLIN</div>
}

class WallMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 13,
      geojson: null,
    }
  }

  isInWest(pos, geojson) {
    if (!pos || !geojson) {
      return false;
    }
    const gjLayer = L.geoJSON(geojson);
    return LeafletPip.pointInLayer(pos, gjLayer).length;
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      pos: [this.props.lat, this.props.lng],
      geojson,
    });
  }

  render() {
    const { pos, geojson } = this.state;
    const inWest = this.isInWest(pos, geojson);

    return (
      <div>
        <RenderSide inWest={inWest} />
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
              <RenderSide inWest={inWest} />
            </Popup>
          </Marker>
        </Map></div>
    )
  }
}

export default WallMap;
