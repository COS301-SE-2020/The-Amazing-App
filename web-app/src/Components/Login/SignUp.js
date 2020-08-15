import React from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import image from "../../Assets/logo.png";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  state = { username: "", email: "", password: "", err: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
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
          <Form onSubmit={this.onFormSubmit} size="medium">
            <Segment stacked>
              <div style={{ alignItems: "center" }}>
                <img
                  src={image}
                  style={{ width: 130, height: 130, alignSelf: "center" }}
                />
              </div>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                id="usersname"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
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

              <Button fluid color="teal" size="medium">
                Register
              </Button>
              <Message>
                Already have an account ? <Link to="/login"> Login</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignUp;
