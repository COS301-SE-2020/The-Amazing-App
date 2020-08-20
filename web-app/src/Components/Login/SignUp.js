import React, { useState } from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import image from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup, signin, resetPassword } from "../../store/actions/auth";
import useForm from "../../utils/useForm";
import validate from "../../utils/validateSignUpForm";

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
    // signin
    signup(credentials.email, credentials.password, credentials.username);
  }

  return (
    <div className="login">
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
              {authMsg && (
                <p className="auth-message" style={{ color: "teal" }}>
                  {authMsg}
                </p>
              )}
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
                id="usersname"
                type="text"
                value={credentials.username}
                onChange={handleChange}
                className={errors.UsernameIsEmpty && "input-error"}
              />
              <div>
                {errors.UsernameIsEmpty && (
                  <small>{errors.UsernameIsEmpty}</small>
                )}
              </div>
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
              <div>
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
                  <div>
                    {errors.passIsStrong && (
                      <small>{errors.passIsStrong}</small>
                    )}
                    {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}
                  </div>
                </div>
              )}

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
    signup: (email, password, username) =>
      dispatch(signup(email, password, username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
