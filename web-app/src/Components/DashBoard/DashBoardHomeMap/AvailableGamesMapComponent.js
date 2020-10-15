import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashHomeMap from "./DashHomeMap";
class AvailableGamesMapComponent extends React.Component {
  render() {
    return (
      <div style={{ height: "100%", marginRight: 20 }}>
        <div style={{ height: 515, marginTop: 0 }}>
          <DashHomeMap />
        </div>
      </div>
    );
  }
}

export default AvailableGamesMapComponent;
