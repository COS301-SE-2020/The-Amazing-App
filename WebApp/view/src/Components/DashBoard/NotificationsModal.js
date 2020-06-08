import React from "react";

class NotificationsModal extends React.Component {
  render() {
    return (
      <button className="ui large button"style={{marginTop: 12,fontSize: 15,backgroundColor: "#2A9D8F",color: "white"}}>
        <i className="bell icon"></i>
        Notifications
      </button>
    );
  }
}

export default NotificationsModal;
