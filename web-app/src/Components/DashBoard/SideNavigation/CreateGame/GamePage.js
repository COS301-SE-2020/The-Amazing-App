import React from "react";
import CreateGameModal from "./CreateGameModal";
import CreateShortQuest from "./CreateShortQuest";
import CreateClueQuest from "./CreateClueQuest";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "semantic-ui-react";
import Navbar from "../../../NavBar/navBar";
import Footer from "../../../NavBar/Footer";
import db from "../../../../Config/fbConfig";
import SignIn from "../../../Login/SignIn"
import Cookies from "js-cookie";

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      success: "",
      validTok: null,
      auth: false,
    };
  }

  componentDidMount() {
    db.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          user.getIdToken().then((idToken) => {
            // console.log(idToken); // It shows the Firebase token now
            this.setState({ validTok: idToken });
            if (this.state.validTok == Cookies.get("token")) {
              this.setState({ auth: true });
            }
            this.setState({ success: "found" });
          });
        }
      }.bind(this)
    );
  }

  goHome = () => {
    window.location.href = "/dashboard";
  };

  render() {

    const myStyle = {
      height: "200px",
      width: "400px",
      position: "fixed",
      top: "50%",
      left: "50%",
      marginTop: "-100px",
      marginLeft: "-200px",
    };

    this.token = Cookies.get("token");
    if (this.state.success == "" && Cookies.get("outval") == "in") {
      return (
        <div
          style={myStyle}
          class="ui active centered inline massive loader"
        ></div>
      );
    } else {
      if (this.state.auth) {
        return (
          <div>
            <Navbar />
            <div style={{paddingBottom: "15%"}}>
            <h1 style={{ textAlign: "center" }}>Game Questions Options</h1>
            <Row style={{ marginTop: "2%" }}>
              <Col style={{ textAlign: "center" }} xs={4}>
                <h3>Multiple Choice Questions</h3>
                <p
                  style={{
                    textAlign: "center",
                    marginRight: "1%",
                    marginLeft: "1%",
                  }}
                >
                  In this setup, the questions will appear in a multiple choice
                  format to the game player. The player will be presented a question
                  will choose the correct option amongst the given options.
                </p>
                <CreateGameModal />
              </Col>
              <Col style={{ textAlign: "center" }} xs={4}>
                <h3>Short Answers Questions</h3>
                <p
                  style={{
                    textAlign: "center",
                    marginRight: "1%",
                    marginLeft: "1%",
                  }}
                >
                  In this setup, a question will appear to the game player and the
                  player will be provided with an input box to fill in the answer of
                  the question. To create a question, advance and then fill in the
                  required fields.
                </p>
                <CreateShortQuest />
              </Col>
              <Col style={{ textAlign: "center" }} xs={4}>
                <h3>Clues</h3>
                <p
                  style={{
                    textAlign: "center",
                    marginRight: "1%",
                    marginLeft: "1%",
                  }}
                >
                  This is a setup where the game players will be presented with
                  clues in order to solve some riddles as part of the game play. No
                  questions are asked, only clues are presented.
                </p>
                <CreateClueQuest />
              </Col>
            </Row>
            <div style={{ textAlign: "center", marginTop: "10%" }}>
              <Button
                size="medium"
                style={{
                  fontSize: 13,
                  backgroundColor: "#2A9D8F",
                  color: "white",
                }}
                onClick={this.goHome}
              >
                Back to Dashboard
              </Button>
            </div>
            </div>
            <Footer />
          </div>
        );
      } else {
        return (
          <div>
            <SignIn />
          </div>
        );
      }
    }

    
  }
}

export default GamePage;
