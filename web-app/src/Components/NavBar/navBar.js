import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import UserOptions from "./UserOptions";

class NavBar extends React.Component {
  render() {
    const myStyle = {
      fontSize: 16,
      color: "white",
      fontFamily: "'Helvetica Neue', Arial, Helvetica, sans-serif",
    };

    return (
      <Navbar sticky="top" style={{ backgroundColor: "#2A9D8F" }}>
        <Navbar.Brand style={{ marginLeft: 75, color: "white", fontSize: 15 }}>
          <img
            src={logo}
            className="ui small circular image"
            alt="userImage"
            style={{ height: 50, width: 50 }}
          />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav
          style={{ marginRight: 100, color: "white", fontWeight: "normal" }}
          className="lead"
          pull
          Right
        >
          <Nav.Link href="/" className="active" style={myStyle} exact>
            Home
          </Nav.Link>
          <Nav.Link className="active" href="dashboard" style={myStyle} exact>
            Dashboard
          </Nav.Link>
          <Nav.Link href="#">
            <UserOptions />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
