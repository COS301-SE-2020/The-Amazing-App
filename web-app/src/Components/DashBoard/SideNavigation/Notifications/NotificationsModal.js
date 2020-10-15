import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import { List } from "semantic-ui-react";
import MyNotifcations from "./MyNotifcations";

class NotificationsModal extends React.Component {
  render() {
    return (
      <Modal
        style={{
          marginTop: 70,
          top: "auto",
          bottom: "auto",
          left: "auto",
          right: "auto",
          position: "relative",
        }}
        trigger={
          <Button
            size="medium"
            style={{
              marginTop: 12,
              marginLeft: 10,
              fontSize: 13,
              backgroundColor: "#2A9D8F",
              color: "white",
            }}
          >
            <i className="bell icon"></i>
            Notifications
          </Button>
        }
        centered={false}
        closeIcon
      >
        <Modal.Header>Notifications</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <MyNotifcations />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default NotificationsModal;
