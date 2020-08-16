import React from "react";
import { Button, Modal } from "semantic-ui-react";
import MapModal from "./MapModal";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import GameName from "./GameName";
import axios from "axios";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";
import history from "../../../../history";
import { connect } from "react-redux";
import { createProject } from '../../../../store/actions/projectActions'

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ";

const gameObject1 = {
  question: "",
  answers: [],
  location: "",
};

const gameObject2 = {
  question: "",
  answers: [],
  location: "",
};

const gameObject3 = {
  question: "",
  answers: [],
  location: "",
};

const game = {
  name: "",
  description: "",
  user_id: "",
  properties: [],
};

//const gamesArray = [];

class CreateGameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      gameDesc: "",
      returnVal: "",
      address: [],
      quest1: "",
      ans1: "",
      ans2: "",
      ans3: "",
      quest2: "",
      ans21: "",
      ans22: "",
      ans23: "",
      quest3: "",
      ans31: "",
      ans32: "",
      ans33: "",
      save1: "Save",
      save2: "Save",
      save3: "Save",
      submit: "Submit Game",
    };

    this.token = Cookies.get("token");
    const instance = axios
      .get("http://localhost:8000/api/auth/me", {
        headers: { Authorization: "Bearer " + this.token },
      })
      .then((res) => {
        if (res.status == 200) {
          game.user_id = res.data.data._id;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  addToGameProp1 = (event) => {
    event.preventDefault();
    this.setState({ save1: "Saved !" });
    gameObject1.question = this.state.quest1;
    gameObject1.answers[0] = this.state.ans1;
    gameObject1.answers[1] = this.state.ans2;
    gameObject1.answers[2] = this.state.ans2;
    gameObject1.location = this.state.address[0];

    game.properties.push(gameObject1);
  };

  addToGameProp2 = (event) => {
    event.preventDefault();
    this.setState({ save2: "Saved !" });
    gameObject2.question = this.state.quest2;
    gameObject2.answers[0] = this.state.ans21;
    gameObject2.answers[1] = this.state.ans22;
    gameObject2.answers[2] = this.state.ans23;
    gameObject2.location = this.state.address[1];

    game.properties.push(gameObject2);
  };

  addToGameProp3 = (event) => {
    event.preventDefault();
    this.setState({ save3: "Saved !" });
    gameObject3.question = this.state.quest3;
    gameObject3.answers[0] = this.state.ans31;
    gameObject3.answers[1] = this.state.ans32;
    gameObject3.answers[2] = this.state.ans33;
    gameObject3.location = this.state.address[2];

    game.properties.push(gameObject3);
  };

  updateAddress(value) {
    this.setState({
      address: this.state.address.concat(value),
    });
  }

  getGameName(value) {
    game.name = value.gameName;
    game.description = value.descrip;
  }

  onSubmitGame = (event) => {
    event.preventDefault();
    console.log(game);
    this.props.createProject(game)
    this.setState({ submit: "Submitted !" });
    this.token = Cookies.get("token");
    const instance = axios
      .post("http://localhost:8000/api/game/GameDetails", game, {
        headers: { Authorization: "Bearer " + this.token },
      })
      .then((res) => {
        if (res.status == 200) {
          console.log("Success!!!");
          window.location.reload(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
        console.log("Fail!!!");
        window.location.reload(true);
      });
  };

  render() {
    return (
      <Modal
        style={{
          marginTop: 80,
          top: "auto",
          left: "auto",
          right: "auto",
          position: "relative",
        }}
        trigger={
          <Button
            size="medium"
            style={{
              marginTop: 12,
              fontSize: 13,
              marginLeft: 10,
              backgroundColor: "#2A9D8F",
              color: "white",
            }}
          >
            <i className="users icon"></i>
            Create Game
          </Button>
        }
        centered={false}
        closeIcon
      >
        <Modal.Header>Create Game</Modal.Header>
        <Modal.Content scrolling>
          <GameName getGameDetails={this.getGameName.bind(this)} />
          <hr />
          <Modal.Description style={{ marginTop: 10 }}>
            <div style={{ marginTop: 5 }}>
              <div className="ui form" style={{ width: 700 }}>
                <div className="field">
                  <label>Question 1</label>
                  <input
                    required
                    type="text"
                    value={this.state.quest1}
                    placeholder="Type Question..."
                    onChange={(e) => this.setState({ quest1: e.target.value })}
                  />
                </div>
              </div>
              <div className="ui form" style={{ marginTop: 15 }}>
                <div className="three fields">
                  <div className="field">
                    <label>Answer 1(Correct Option)</label>
                    <input
                      required
                      type="text"
                      value={this.state.ans1}
                      placeholder="Type Correct Answer..."
                      onChange={(e) => this.setState({ ans1: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 2</label>
                    <input
                      required
                      type="text"
                      value={this.state.ans2}
                      placeholder="Type Answer..."
                      onChange={(e) => this.setState({ ans2: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 3</label>
                    <input
                      required
                      type="text"
                      value={this.state.ans3}
                      placeholder="Type Answer..."
                      onChange={(e) => this.setState({ ans3: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="ui form" style={{ marginTop: 15 }}>
                <MapModal getAddress={this.updateAddress.bind(this)} />
                <div className="ui form" style={{ marginTop: 15, width: 520 }}>
                  <div className="field disabled" style={{ color: "grey" }}>
                    <input
                      required
                      id="location1"
                      type="text"
                      value={this.state.address[0]}
                      onChange={(e) =>
                        this.setState({
                          address: this.state.address.concat(this.address[0]),
                        })
                      }
                      placeholder="Selected Location Will Appear Here..."
                    />
                  </div>
                </div>
              </div>
              <Button
                style={{
                  backgroundColor: "#2A9D8F",
                  color: "white",
                  marginTop: 10,
                }}
                onClick={this.addToGameProp1}
              >
                <i className="checkmark icon"></i>
                {this.state.save1}
              </Button>
            </div>
            <hr />
            <div style={{ marginTop: 5 }}>
              <div className="ui form" style={{ width: 700 }}>
                <div className="field">
                  <label>Question 2</label>
                  <input
                    type="text"
                    value={this.state.quest2}
                    placeholder="Type Question..."
                    onChange={(e) => this.setState({ quest2: e.target.value })}
                  />
                </div>
              </div>
              <div className="ui form" style={{ marginTop: 15 }}>
                <div className="three fields">
                  <div className="field">
                    <label>Answer 1(Correct Option)</label>
                    <input
                      type="text"
                      value={this.state.ans21}
                      placeholder="Type Correct Answer..."
                      onChange={(e) => this.setState({ ans21: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 2</label>
                    <input
                      type="text"
                      value={this.state.ans22}
                      placeholder="Type Answer..."
                      onChange={(e) => this.setState({ ans22: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 3</label>
                    <input
                      type="text"
                      value={this.state.ans23}
                      placeholder="Type Answer..."
                      onChange={(e) => this.setState({ ans23: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="ui form" style={{ marginTop: 15 }}>
                <MapModal getAddress={this.updateAddress.bind(this)} />
                <div className="ui form" style={{ marginTop: 15, width: 520 }}>
                  <div className="field disabled" style={{ color: "grey" }}>
                    <input
                      id="location2"
                      type="text"
                      value={this.state.address[1]}
                      onChange={(e) =>
                        this.setState({
                          address: this.state.address.concat(this.address[1]),
                        })
                      }
                      placeholder="Selected Location Will Appear Here..."
                    />
                  </div>
                </div>
              </div>
              <Button
                style={{
                  backgroundColor: "#2A9D8F",
                  color: "white",
                  marginTop: 10,
                }}
                onClick={this.addToGameProp2}
              >
                <i className="checkmark icon"></i>
                {this.state.save2}
              </Button>
            </div>
            <hr />
            <div style={{ marginTop: 5 }}>
              <div className="ui form" style={{ width: 700 }}>
                <div className="field">
                  <label>Question 3</label>
                  <input
                    type="text"
                    value={this.state.quest3}
                    placeholder="Type Question..."
                    onChange={(e) => this.setState({ quest3: e.target.value })}
                  />
                </div>
              </div>
              <div className="ui form" style={{ marginTop: 15 }}>
                <div className="three fields">
                  <div className="field">
                    <label>Answer 1(Correct Option)</label>
                    <input
                      type="text"
                      value={this.state.ans31}
                      placeholder="Type Correct Answer..."
                      onChange={(e) => this.setState({ ans31: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 2</label>
                    <input
                      type="text"
                      value={this.state.ans32}
                      placeholder="Type Answer..."
                      onChange={(e) => this.setState({ ans32: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 3</label>
                    <input
                      type="text"
                      value={this.state.ans33}
                      placeholder="Type Answer..."
                      onChange={(e) => this.setState({ ans33: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="ui form" style={{ marginTop: 15 }}>
                <MapModal getAddress={this.updateAddress.bind(this)} />
                <div className="ui form" style={{ marginTop: 15, width: 520 }}>
                  <div className="field disabled" style={{ color: "grey" }}>
                    <input
                      id="location3"
                      type="text"
                      value={this.state.address[2]}
                      onChange={(e) =>
                        this.setState({
                          address: this.state.address.concat(this.address[2]),
                        })
                      }
                      placeholder="Selected Location Will Appear Here..."
                    />
                  </div>
                </div>
                <Button
                  style={{
                    backgroundColor: "#2A9D8F",
                    color: "white",
                    marginTop: 10,
                  }}
                  onClick={this.addToGameProp3}
                >
                  <i className="checkmark icon"></i>
                  {this.state.save3}
                </Button>
              </div>
            </div>
            <hr />
            <button
              className="ui button"
              onClick={this.onSubmitGame}
              style={{ backgroundColor: "#2A9D8F", color: "white" }}
            >
              {this.state.submit}
            </button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(null, mapDispatchToProps)(CreateGameModal);
