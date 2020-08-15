import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import image from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="medium">
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
          />
          <Form.Input
            fluid
            icon="envelope"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
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

export default SignUp;
