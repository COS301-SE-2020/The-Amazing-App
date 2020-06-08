import React from "react";

class MyGamesModal extends React.Component {
  render() {
    return (
      <button className="ui large button" style={{marginTop: 12,fontSize: 15,backgroundColor: "#2A9D8F",color: "white"}}>
        <i className="trophy icon"></i>
        My Games
      </button>
    );
  }
}

export default MyGamesModal;
