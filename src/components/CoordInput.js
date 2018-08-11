import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

class CoordInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 0,
      long: 0,
    }
  }

  render() {
    const handleChange = this.props.handleChange;
    return (
      <form noValidate autoComplete="off">
        <TextField
          id="lat"
          label="Latitude"
          value={this.state.lat}
          onChange={this.props.handleChange("lat")}
          margin="normal"
        />
        <TextField
          id="lng"
          label="Longitude"
          value={this.state.lng}
          onChange={this.props.handleChange("lng")}
          margin="normal"
        />
      </form>
    );
  }
}

export default CoordInput;
