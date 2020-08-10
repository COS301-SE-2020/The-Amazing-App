import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import { List } from 'semantic-ui-react'

class NotificationsModal extends React.Component {
  render() {
    return (
      <Modal
        style={{marginTop: 100, top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 300}} 
        trigger={
          <Button size='medium' style={{marginTop: 12, marginLeft: 10, fontSize: 13,backgroundColor: "#2A9D8F",color: "white",}}>
            <i className="bell icon"></i>
            Notifications
          </Button>
        } centered={false} closeIcon>
        <Modal.Header>Notifications</Modal.Header>
        <Modal.Content >
          <Modal.Description>
          <List style={{fontSize: 20,color: "black"}}>
            <List.Item icon='users' content='group "lengends" has finished game Detetives' />
            <br />
            <List.Item icon='marker' content='group "NewTect" has arrive at location X' />
            <br />
            <List.Item
              icon='mail'
              content={<a href='mailto:NewTech@gmail.com'>new message from mail</a>}
            />
            <br />
            <List.Item
              icon='trophy'
              content='group "Gamma" sets record time'
            />
          </List>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default NotificationsModal;
