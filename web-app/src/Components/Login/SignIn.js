import React from "react";
import map from "../../Assets/map.jpg";
import logo from "../../Assets/logo.png";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import Nav from "../NavBar/navBar.js";

class SignIn extends React.Component {
  state = { email: "", pasword: "", err: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email == "" || this.state.password == "") {
      this.setState({ err: "Please fill in all the fields!" });
    } else {
      axios
        .post("http://localhost:8000/api/auth/Login", data)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.status == 200) {
            Cookies.set("token", res.data.token, { expires: 2 });
            this.props.history.push("/");
            this.props.history.push("/DashBoard");
          }
        })
        .catch((error) => {
          this.setState({ err: error.message });
        });
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <img src={logo} alt="logo" id="logo"></img>
        <div class="loginPage">
          <span class="loginContainer">
            <div class="logReg">
              <ul
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Link to="/login">
                  <li>Login</li>
                </Link>
                <Link to="SignUp">
                  <li>Register</li>
                </Link>
              </ul>
            </div>
            <form onSubmit={this.onFormSubmit}>
              Email:{" "}
              <input
                id="email"
                type="email"
                name="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
              Password:{" "}
              <input
                id="password"
                type="password"
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
              <div id="input">
                <button id="loginbtn">Login</button>
                <Link to="/Forgot">
                  <p> Forgot Password </p>
                </Link>
                <p id="error">{this.state.err}</p>
              </div>
            </form>
          </span>
        </div>
        <img
          src={map}
          alt="map1"
          style={{ width: 400, marginTop: -130, marginLeft: 170 }}
        />
      </div>
    );
  }
}

export default withRouter(SignIn);
