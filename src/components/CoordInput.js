import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    margin: "5px 10px"
  },
  form: {
    display: "flex", 
    flexFlow: "column nowrap",
    margin: "5px 10px"
  },
  buttonsContainer: {
    width: "100%", 
    display: "flex", 
    flexFlow: "row nowrap", 
    justifyContent: "center"
  }
}

class CoordInput extends Component {
  state = {
    pos: this.props.pos
  };

  handleSubmit = event => this.props.handleSubmit(this.state.pos);

  render() {
    const { pos, classes } = this.props;
    const placeholder = pos ? pos : {lat: "Latitude", lng: "Longitude"};

    if (!pos) {
      return <div className={classes.root} >
        Localisation unavailable
      </div>;
    }

    return (
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={ event => event.preventDefault() }
        className={classes.form}
      >
        <TextField
          id="lat"
          label="Latitude"
          defaultValue={placeholder.lat.toString()}
          onChange={ event => {this.setState({
            pos: {...this.state.pos, lat: event.target.value}
          })}}
          margin="normal"
        />
        <TextField
          id="lng"
          label="Longitude"
          defaultValue={placeholder.lng.toString()}
          onChange={event => { this.setState({ 
            pos: {...this.state.pos, lng: event.target.value}
          })}}
          margin="normal"
        />
        <div className={classes.buttonsContainer} >
         <Link to="/" style={{flex: 1}} >
          <Button onClick={this.handleSubmit}>
           GO
           </Button>
         </Link>
         <Link style={{flex: 1}} to="/map">
          <Button onClick={this.handleSubmit}>
           MAP
           </Button>
         </Link>
        </div>
      </form>
    );
  }
}


export default withStyles(styles)(CoordInput);
