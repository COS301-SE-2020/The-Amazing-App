import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavComponent from "./SideNavigation/SideNavComponent";
import Footer from "../NavBar/Footer";
import Navbar from "../NavBar/navBar";
import Cookies from "js-cookie";
import SignIn from "../Login/SignIn";
import db from "../../Config/fbConfig";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      success: "",
      validTok: null,
    };
  }

  componentDidMount() {
    db.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          user.getIdToken().then((idToken) => {
            // console.log(idToken); // It shows the Firebase token now
            this.setState({ validTok: idToken });
            this.setState({ success: "found" });
          });
        }
      }.bind(this)
    );
    /*this.token = Cookies.get("token");
    const instance = axios
      .get("http://localhost:8000/api/auth/me", {
        headers: { Authorization: "Bearer " + this.token },
      })
      .then((res) => {
        if (res.status == 200) {
          this.setState({ auth: true });
          this.setState({ success: "found" });
        }
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ success: "notfound" });
      });*/
    //console.log("Email here " + Cookies.get("email"));
  }

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
    if (this.state.success == "" && this.state.validTok == "") {
      return (
        <div
          style={myStyle}
          class="ui active centered inline massive loader"
        ></div>
      );
    } else {
      if (this.state.validTok == this.token) {
        return (
          <div>
            <Navbar />
            <SideNavComponent />
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

export default App;
