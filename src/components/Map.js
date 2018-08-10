import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class SimpleExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 13,
    }
  }

  componentDidMount() {
    this.setState((state) => this.props);
    console.log(this.state);
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} style={{height: "500px"}}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <p>You are here</p>
          </Popup>
        </Marker>
      </Map>
    )
  }
}
