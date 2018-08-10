import React, { Component } from "react";
import { Link } from "react-router-dom";


class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
          <ul>
            <li><Link to={{ pathname: '/about' }}>About</Link></li>
            <li><Link to={{ pathname: '/' }}>Map</Link></li>
          </ul>
      </div>
      );
  }
}

export default HomeView;
