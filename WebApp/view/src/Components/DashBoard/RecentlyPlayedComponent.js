import React from "react";
import image2 from "./no_picture.jpg";

class RecentlyPlayedComponent extends React.Component {
  render() {
    return (
      <div>
        <h4 style={{marginTop: 15,color: "#FF4500",fontWeight: "bold"}}>Recently Played</h4>
        <div className="ui comments">
          <div className="comment">
            <div className="avatar">
              <img src={image2} alt="Game 1" />
            </div>
            <div className="content">
              <h5 className="author">The Detective</h5>
              <button className="ui small button" style={{ backgroundColor: "#264653", color: "white" }}>Check</button>
            </div>
          </div>
          <div className="comment">
            <div className="avatar">
              <img src={image2} alt="Game 2" />
            </div>
            <div className="content">
              <h6 className="author">The Octopus</h6>
              <button className="ui small button" style={{ backgroundColor: "#264653", color: "white" }}>Check</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentlyPlayedComponent;
