import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import MyGames from "./MyGames";
import rootReducer from '../../../../store/reducers/rootReducer'
import { connect } from "react-redux";
import GameSummary from "./GameSummary";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class MyGamesModal extends Component {
  render() {
    console.log(this.props);
    const { projects } = this.props;
    return (
      <Modal
        style={{
          marginTop: 100,
          top: "auto",
          bottom: "auto",
          left: "auto",
          right: "auto",
          position: "relative",
          height: 600,
        }}
        trigger={
          <Button
            size="medium"
            style={{
              marginLeft: 10,
              marginTop: 12,
              fontSize: 13,
              backgroundColor: "#2A9D8F",
              color: "white",
              width: 135,
            }}
          >
            <i className="trophy icon"></i>
            My Games
          </Button>
        }
        centered={false}
        closeIcon
      >
        <Modal.Header>My Games</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <MyGames projects={projects} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.project.projects
  }
}
export default compose(
  firestoreConnect(() => ['projects']),
  connect(mapStateToProps)
) (MyGamesModal);
