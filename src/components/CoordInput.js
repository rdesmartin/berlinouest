import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import onClickOutside from "react-onclickoutside";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    display: "flex", 
    flexFlow: "column nowrap",
    margin: "0px 20px"
  },
  buttonsContainer: {
    width: "100%", 
    display: "flex", 
    flexFlow: "row nowrap", 
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonLink: {
    textDecoration: "none",
  },
  button: {
    flex: "1 1 0px",
  }
}

class CoordInput extends Component {
  state = {
    pos: this.props.pos
  };

  handleClickOutside = this.props.handleMenuClose;

  handleSubmit = event => this.props.handleSubmit(this.state.pos);

  render() {
    const { pos, classes } = this.props;
    const placeholder = pos ? pos : {lat: "", lng: ""};

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
         <Link className={classes.buttonLink} to="/">
          <Button onClick={this.handleSubmit} variant="outlined">
            <FormattedMessage id="coordinput.button.go" />
           </Button>
         </Link>
         <Link className={classes.buttonLink} to="/map">
          <Button className={classes.button} onClick={this.handleSubmit} variant="outlined">
            <FormattedMessage id="coordinput.button.map" />
          </Button>
         </Link>
        </div>
      </form>
    );
  }
}


export default withStyles(styles)(onClickOutside(CoordInput));
