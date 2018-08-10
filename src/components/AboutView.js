import React, { Component } from "react";
import { Link } from "react-router-dom";


class AboutView extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
          <p>
          <Link to={{ pathname: '/home' }}>Home</Link>
          </p>
      </div>
    );
  }
}

export default AboutView;
