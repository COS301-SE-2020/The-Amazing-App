import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class MyGamesModal extends React.Component {
  render() {
    return (
      <Modal
        style={{marginTop: 100, top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 500}} 
        trigger={
          <Button size='medium' style={{marginLeft: 10, marginTop: 12,fontSize: 13,backgroundColor: "#2A9D8F",color: "white", width: 135}}>
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
