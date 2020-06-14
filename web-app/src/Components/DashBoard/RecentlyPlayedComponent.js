import React from "react";
import image2 from "./no_picture.jpg";

class RecentlyPlayedComponent extends React.Component {
  render() {
    return (
      <div style={{marginLeft: 10}} >
        <h4 style={{marginTop: 15,color: "#FF4500",fontWeight: "bold"}}>Recently Played</h4>
        <div className="ui comments" style={{marginBottom: 15}}>
          <div className="comment">
            <div className="content">
              <h6 className="author">1. The Detective</h6>
              {/*<button className="ui small button" style={{ backgroundColor: "#264653", color: "white", fontSize: 12 }}>Check</button>*/}
            </div>
          </div>
          <div className="comment">
            <div className="content">
              <h6 className="author">2. The Octopus</h6>
              {/*<button className="ui small button" style={{ backgroundColor: "#264653", color: "white", fontSize: 12 }}>Check</button>*/}
            </div>
          </div>
          <div className="comment">
            <div className="content">
              <h6 className="author">3. The Gambler</h6>
              {/*<button className="ui small button" style={{ backgroundColor: "#264653", color: "white", fontSize: 12 }}>Check</button>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentlyPlayedComponent;
