import React, { useState } from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import image from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup, signin, resetPassword } from "../../store/actions/auth";
import useForm from "../../utils/useForm";
import validate from "../../utils/validateLoginForm";

const Login = ({
  signup,
  signin,
  resetPassword,
  authMsg,
  history,
  loading,
}) => {
  const [newUser, setNewUser] = useState(false);
  const [reset, SetReset] = useState(false);
  const [credentials, handleChange, handleSubmit, errors] = useForm(
    login,
    validate,
    reset
  );

  function login() {
    if (newUser) {
      // signup
      signup(credentials.email, credentials.password);
    } else {
      if (reset) {
        // reset password
        resetPassword(credentials.email);
      } else {
        // signin
        signin(credentials.email, credentials.password, () =>
          history.push("/")
        );
      }
    }
  }

  return (
    <div className="login">
      <h2>
        {reset ? "Reset password" : newUser ? "Create an account" : "Sign in"}
      </h2>
      {authMsg && <p className="auth-message">{authMsg}</p>}
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="medium" onSubmit={handleSubmit} noValidate>
            <Segment stacked>
              <div style={{ alignItems: "center" }}>
                <img
                  src={image}
                  style={{ width: 130, height: 130, alignSelf: "center" }}
                />
              </div>
              <div>
                <Form.Input
                  fluid
                  icon="envelope"
                  type="email"
                  name="email"
                  iconPosition="left"
                  placeholder="E-mail address"
                  id="useremail"
                  value={credentials.email}
                  onChange={handleChange}
                  className={
                    (errors.emailIsEmpty || errors.emailFormatInvalid) &&
                    "input-error"
                  }
                />
                {errors.emailIsEmpty && <small>{errors.emailIsEmpty}</small>}
                {errors.emailFormatInvalid && (
                  <small>{errors.emailFormatInvalid}</small>
                )}
              </div>

              {!reset && (
                <div>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    name="password"
                    value={credentials.password}
                    type="password"
                    id="userpassword"
                    onChange={handleChange}
                    className={
                      (errors.passIsStrong || errors.passIsEmpty) &&
                      "input-error"
                    }
                  />
                  {errors.passIsStrong && <small>{errors.passIsStrong}</small>}
                  {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}
                </div>
              )}

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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    authMsg: state.authReducer.authMsg,
    loading: state.apiStatusReducer.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (email, password) => dispatch(signup(email, password)),
    signin: (email, password, callback) =>
      dispatch(signin(email, password, callback)),
    resetPassword: (email) => dispatch(resetPassword(email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

/*class SignIn extends React.Component {
  state = { email: "", pasword: "", err: "" };
  onFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.signIn(data);
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
                type="email"
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

function mapDispatchToProps(dispatch) {
  return {
    signIn: (creds, callback) => dispatch(signIn(creds, callback())),
  };
}

export default connect(null, mapDispatchToProps)(SignIn);*/
