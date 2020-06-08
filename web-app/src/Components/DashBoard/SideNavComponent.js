import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import AvailableGamesMapComponent from "./AvailableGamesMapComponent";
import CreateGameModal from "./CreateGameModal";
import UserImageComponent from "./UserImageComponent";
import NotificationsModal from "./NotificationsModal";
import MyGamesModal from "./MyGamesModal";
import RecentlyPlayedComponent from "./RecentlyPlayedComponent";

class SideNavComponent extends React.Component {
  render() {
    const colStyle = {
        display: "column",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
      <Container>
        <h1 className="ui header" style={{textAlign: "center", fontSize: 30}}>Navbar</h1>
        <Row>
          <Col xs={3}>
            <Col style={colStyle}>
              <UserImageComponent />
              <NotificationsModal />
              <br />
              <CreateGameModal />
              <br />
              <MyGamesModal />
              <RecentlyPlayedComponent />
            </Col>
          </Col>
          <Col>
            <AvailableGamesMapComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SideNavComponent;