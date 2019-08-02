import React, { Component } from "react";
import "./map.css";

class Map extends Component {
  render() {
    return (
      <div className="map-container">
        <div className="spot" />
        <img src={require("../assets/map.png")} alt="" />
      </div>
    );
  }
}

export default Map;
