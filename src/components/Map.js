//@flow
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  errorMessage: {
    color: "#dd350b",
    width: "100%",
    margin: "5% 5%",
  },
  circularProgress: {
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifycontent: "center",
    marginTop: "10%"
  }
}


class WallMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      zoom: 10,
    }
    this.timer = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 10000);
  }


  render() {
    const { pos, classes, geojsonWall, geojsonCity } = this.props;
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
            geojsonCity &&
              <GeoJSON 
                data={geojsonCity} 
                style={geojsonFeature => ({
                  fill: false,
                  color: "#dd350b"
                })}
              />
          }

          {
            geojsonWall &&
              <GeoJSON 
                data={geojsonWall} 
                style={geojsonFeature => ({
                  weight: 2,
                })}
              />
          }
          <Marker position={pos}>
            <Popup>
              <FormattedMessage id="map.popup.label" />
            </Popup>
          </Marker>
        </Map>
        }
        {
          !pos && this.state.loading &&
            <div className={classes.circularProgress}>
              <CircularProgress/>
            </div>
        }
        {
          !pos && !this.state.loading &&
            <div className={classes.errorMessage}>
              <FormattedMessage id="error.pos.unavailable" />
            </div>
        }
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


export default withStyles(styles)(connect(MapStateToProps)(WallMap));
