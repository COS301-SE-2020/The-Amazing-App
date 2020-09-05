import React from "react";
import { Button, Modal } from "semantic-ui-react";

class Submitted extends React.Component {
  closeWindow = (event) => {
    event.preventDefault();
    window.location.reload(true);
  };

  render() {
    return (
      <Modal size="mini">
        <Modal.Content>
          <p>Your Game has been created successfully!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={this.closeWindow}>
            Done
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Submitted;
