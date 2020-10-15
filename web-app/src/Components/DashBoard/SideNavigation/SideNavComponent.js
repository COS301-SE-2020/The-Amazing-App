import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Modal } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import AvailableGamesMapComponent from "../DashBoardHomeMap/AvailableGamesMapComponent";
import CreateGameModal from "./CreateGame/CreateGameModal";
import UserImageComponent from "./UserImage/UserImageComponent";
import NotificationsModal from "./Notifications/NotificationsModal";
import MyGamesModal from "./MyGames/MyGamesModal";
import UserOptions from "../../NavBar/UserOptions"
import GamePage from "./CreateGame/GamePage";

class SideNavComponent extends React.Component {
  openGame = (event) => {
    event.preventDefault();
    window.location.href = "/gamepage";
  };

  qrCode = (event) => {
    event.preventDefault();
    window.open("https://www.the-qrcode-generator.com/");
  };

  render() {
    const colStyle = {
      display: "column",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <Row style={{ marginTop: "1%", height: "100%", paddingBottom: "5%" }}>
        <Col xs={12} md={2} sm={2} style={{paddingLeft: "3%"}}>
            <UserOptions /> <br />
            <NotificationsModal />
            <br />
            <Button
              size="medium"
              style={{
                marginTop: 12,
                fontSize: 13,
                marginLeft: 10,
                backgroundColor: "#2A9D8F",
                color: "white",
              }}
              onClick={this.openGame}
            >
              <i className="users icon"></i>
              Create Game
            </Button>
            <br />
            <MyGamesModal />
            <br />
        </Col>
        <Col xs={12} md={10} sm={10}>
          <AvailableGamesMapComponent />
        </Col>
      </Row>
    );
  }
}

export default SideNavComponent;
