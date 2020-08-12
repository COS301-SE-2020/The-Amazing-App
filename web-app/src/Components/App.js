import React from "react";
import HomePage from "./HomePage";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Forgot from "./Login/Forgot";
import Reset from "./Login/Reset";
import { BrowserRouter, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/dashBoard" exact>
            <DashBoard />
          </Route>
          <Route path="/login" exact>
            <SignIn />
          </Route>
          <Route path="/signUp" exact>
            <SignUp />
          </Route>
          <Route path="/reset" exact>
            <Reset />
          </Route>
          <Route path="/forgot" exact>
            <Forgot />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
