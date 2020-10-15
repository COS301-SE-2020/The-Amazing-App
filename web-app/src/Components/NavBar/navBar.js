import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import UserOptions from "./UserOptions";
import { Button } from "semantic-ui-react";
import firebase from "../../Config/fbConfig";
import Cookies from "js-cookie";

class NavBar extends React.Component {
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign Out Successfull!!");
        Cookies.set("outval", "out", {
          expires: 2,
        });
        window.location.href = "/login";
        //history.pushState("/login")
      })
      .catch(() => {
        window.location.href = "/login";
        alert("Signout Failed!!");
      });
  };

  render() {
    const myStyle = {
      fontSize: 16,
      fontFamily: "'Helvetica Neue', Arial, Helvetica, sans-serif",
      fontWeight: "normal",
    };

    return (
      <Navbar style={{ backgroundColor: "#2A9D8F" }}>
        <Navbar.Brand style={{ color: "white", fontSize: 15, marginLeft: "5%" }}>
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="userImage"
            width="30"
            height="30"
          />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav
          style={{ color: "white", fontWeight: "normal", marginRight: "2%", }}
          className="lead"
          pull
          Right
        >
          <Nav.Link href="/" style={myStyle} exact>
            <Button size="medium" style={{ backgroundColor: "Transparent" }}>
              Home
            </Button>
          </Nav.Link>
          <Nav.Link href="dashboard" style={myStyle} exact>
            <Button
              size="medium"
              style={{
                backgroundColor: "Transparent",
                color: "white",
              }}
            >
              Dashboard
            </Button>
          </Nav.Link>
          <Nav.Link style={myStyle}>
            <Button
              size="medium"
              onClick={this.logout}
              style={{ backgroundColor: "Transparent" }}
            >
              Logout
              <i className="sign-out"></i>
            </Button>
          </Nav.Link>
          {/*<Nav.Link href="#">
            <Button
              size="medium"
              style={{
                backgroundColor: "Transparent",
              }}
            >
              <UserOptions />
            </Button>
            </Nav.Link>*/}
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
