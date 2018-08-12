import React, { Component } from "react";
import PropTypes from "prop-types";

class HomeView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {side} = this.props;

    return (
      <div>
        <h1>Home Page</h1>
        <div>You are on the {side} side of Berlin</div>
      </div>
      );
  }
}

HomeView.propTypes = {
  side: PropTypes.string,
}

export default HomeView;
