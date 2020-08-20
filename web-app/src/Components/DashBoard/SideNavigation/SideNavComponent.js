import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import AvailableGamesMapComponent from "../DashBoardHomeMap/AvailableGamesMapComponent";
import CreateGameModal from "./CreateGame/CreateGameModal";
import UserImageComponent from "./UserImage/UserImageComponent";
import NotificationsModal from "./Notifications/NotificationsModal";
import MyGamesModal from "./MyGames/MyGamesModal";

class SideNavComponent extends React.Component {
  render() {
    const colStyle = {
      display: "column",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <Row style={{ marginTop: 12, height: "100%" }}>
        <Col xs={2.8} style={{ marginLeft: 40 }}>
          <Col style={colStyle}>
            <UserImageComponent />
            <NotificationsModal />
            <br />
            <CreateGameModal />
            <br />
            <MyGamesModal />
          </Col>
        </Col>
        <Col style={{ marginRight: 10 }}>
          <AvailableGamesMapComponent />
        </Col>
      </Row>
    );
  }
}

export default SideNavComponent;
