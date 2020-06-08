import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class MyGamesModal extends React.Component {
  render() {
    return (
      <Modal
        style={{top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 300}} 
        trigger={
          <Button style={{marginTop: 12,fontSize: 15,backgroundColor: "#2A9D8F",color: "white", width: 155}}>
            <i className="trophy icon"></i>
            My Games
          </Button>
        } centered={false} closeIcon>
        <Modal.Header>My Games</Modal.Header>
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

export default MyGamesModal;
