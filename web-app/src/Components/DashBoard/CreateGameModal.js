import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class CreateGameModal extends React.Component {
  render() {
    return (
      <Modal
        style={{marginTop: 100 ,top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 500}} 
        trigger={
          <Button size='medium' style={{marginTop: 12,fontSize: 13, marginLeft: 10, backgroundColor: "#2A9D8F",color: "white",}}>
            <i className="users icon"></i>
            Create Game
          </Button>
        } centered={false} closeIcon>
        <Modal.Header>Create Game</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header></Header>
            <p></p>
            <p></p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CreateGameModal;
