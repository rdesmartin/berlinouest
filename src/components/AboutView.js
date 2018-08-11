import React, { Component } from "react";
import { Link } from "react-router-dom";


class AboutView extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <ul>
          <li><Link to={{ pathname: '/home' }}>Home</Link></li>
          <li><Link to={{ pathname: '/' }}>Map</Link></li>
        </ul>
        <p>This program uses React-Leaflet, React.js and Openstreetmap data to
          tell if you are currently in West Berlin or not.</p>
        <a href="https://github.com/rdesmartin/leaflet_reactjs_openstreetmap_berliner_mauer">
          View project on GitHub
        </a>
      </div>
    );
  }
}

export default AboutView;
