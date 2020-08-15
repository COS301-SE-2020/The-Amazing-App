import React from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import image from "../../assets/logo.png";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  state = { email: "", pasword: "", err: "" };
  onFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(data);
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="medium" onSubmit={this.onFormSubmit}>
            <Segment stacked>
              <div style={{ alignItems: "center" }}>
                <img
                  src={image}
                  style={{ width: 130, height: 130, alignSelf: "center" }}
                />
              </div>
              <Form.Input
                fluid
                icon="envelope"
                iconPosition="left"
                placeholder="E-mail address"
                id="useremail"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                id="userpassword"
                onChange={(e) => this.setState({ password: e.target.value })}
              />

              <Button id="loginbtn" fluid color="teal" size="medium">
                Login
              </Button>
              <Message>
                Don't have an account ?<Link to="/signup"> Register</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignIn;
