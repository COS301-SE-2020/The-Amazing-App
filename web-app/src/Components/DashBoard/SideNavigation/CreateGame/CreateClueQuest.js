import React from "react";
import { Button, Modal } from "semantic-ui-react";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { connect } from "react-redux";
import { createProject } from "../../../../store/actions/projectActions";
import ClueQuest from "./ClueQuest";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ";

class CreateGameModal extends React.Component {
  render() {
    return (
      <div className="create">
        <Modal
          style={{
            top: "auto",
            left: "auto",
            right: "auto",
            position: "relative",
          }}
          trigger={
            <Button
              size="medium"
              style={{
                fontSize: 13,
                marginLeft: 10,
                backgroundColor: "#2A9D8F",
                color: "white",
              }}
            >
              Advance
            </Button>
          }
          centered={false}
          closeIcon
        >
          <Modal.Header>Create Game</Modal.Header>
          <Modal.Content scrolling>
            <ClueQuest />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(null, mapDispatchToProps)(CreateGameModal);
