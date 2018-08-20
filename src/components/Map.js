//@flow
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

class WallMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: null,
      zoom: 10,
    }
  }

  render() {
    const { pos, geojsonWall, geojsonCity } = this.props;
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    return (
      <div>
        {pos &&
        <Map center={pos} zoom={this.state.zoom} style={{height: viewportHeight - 56}}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            geojsonWall &&
              <GeoJSON data={geojsonWall} />
          }
          {
            geojsonWall &&
              <GeoJSON data={geojsonCity} />
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

const MapStateToProps = state => ({
  pos: state.pos,
});


export default connect(MapStateToProps)(WallMap);
