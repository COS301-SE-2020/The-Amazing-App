import React from "react";
import { Form, Button } from "semantic-ui-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "semantic-ui-react";
import gameImage from "../../../../Assets/noimageframe.jpg";
import "../../styles.css";

const nameObject = {
  gameName: "",
  descrip: "",
};

class GameName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      save: "Save",
    };
  }

  sendName = (event) => {
    event.preventDefault();
    this.setState({ save: "Saved !" });
    nameObject.gameName = this.state.name;
    nameObject.descrip = this.state.desc;
    this.props.getGameDetails(nameObject);
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="ui form" style={{ width: 420, marginTop: 10 }}>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  placeholder="Enter Game Name..."
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
            </div>
            <Form style={{ marginTop: 10 }}>
              <Form.TextArea
                label="Description"
                value={this.state.desc}
                placeholder="Game Description..."
                onChange={(e) => this.setState({ desc: e.target.value })}
              />
            </Form>
          </Col>
          <Col>
            <Row>
              <Col>
                <Image
                  style={{ marginTop: 25, marginLeft: 30 }}
                  src={gameImage}
                  size="small"
                />
              </Col>
              <Col>
                <input type="file" className="inputfile" id="fileinput" />
                <label
                  style={{
                    marginTop: 70,
                    marginRight: 30,
                    backgroundColor: "#2A9D8F",
                    color: "white",
                  }}
                  className="ui small floated button"
                >
                  <i className="ui upload icon"></i>
                  Upload image
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button
          style={{ backgroundColor: "#2A9D8F", color: "white", marginTop: 10 }}
          onClick={this.sendName}
        >
          <i className="checkmark icon"></i>
          {this.state.save}
        </Button>
      </div>
    );
  }
}

export default GameName;
