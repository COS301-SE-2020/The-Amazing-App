import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import GameMap from "./GameMap";

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateButton = this.handleCreateButton.bind(this);
    this.state = {
      something: "",
      showModal: false,
    };
  }

  updateSomething(value) {
    console.log("Adress***: " + value);
    this.setState({ something: value });
  }

  handleCreateButton(evt) {
    evt.preventDefault();
    this.closeModal();
  }

  closeModal = () => {
    this.props.getAddress(this.state.something);
    this.setState({ something: "" });
    this.setState({ showModal: false });
  };

  render() {
    const { something, showModal } = this.state;

    return (
      <Modal
        style={{
          marginTop: 90,
          bottom: "auto",
          left: "auto",
          right: "auto",
          position: "relative",
          height: 540,
          width: 1300,
          display: "flex !important",
          justifyContent: "center",
          alignItems: "center",
        }}
        trigger={
          <Button
            style={{ backgroundColor: "#2A9D8F", color: "white" }}
            onClick={() => this.setState({ showModal: true })}
          >
            <i className="map marker alternate icon"></i>Get Location
          </Button>
        }
        centered={true}
        size="fullscreen"
        closeIcon={{
          style: { top: 60, right: 20 },
          name: "close",
          overflow: "visible",
        }}
        onClose={this.closeModal}
        open={showModal}
      >
        <Modal.Content>
          <GameMap updateSomething={this.updateSomething.bind(this)} />
          <Form>
            <Button
              style={{ backgroundColor: "#2A9D8F", color: "white" }}
              onClick={(evt) => this.handleCreateButton(evt)}
            >
              Save Location
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default MapModal;
