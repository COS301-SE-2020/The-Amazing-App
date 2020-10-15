import React from "react";
import HomePage from "./HomePage";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Forgot from "./Login/Forgot";
import Reset from "./Login/Reset";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import GamePage from "./DashBoard/SideNavigation/CreateGame/GamePage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/gamepage" component={GamePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
