//@flow
import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

var geojson = require('../assets/BerlinWall.json'); // eslint-disable-line import/no-webpack-loader-syntax

export default class SimpleExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 13,
      geojson: null,
    }
  }

  getData() {
    this.setState({
      geojson
  });
  }

  componentDidMount() {
    this.getData();
    this.setState((state) => this.props);
  }

  render() {
    console.log(this.state.geojson);
    const position = [this.state.lat, this.state.lng];
    const { geojson } = this.state;

    return (
      <Map center={position} zoom={this.state.zoom} style={{height: "500px"}}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {
        geojson &&
          <GeoJSON data={geojson} />
      }
        <Marker position={position}>
          <Popup>
            <p>You are here</p>
          </Popup>
        </Marker>
      </Map>
    )
  }
}
