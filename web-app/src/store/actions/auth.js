import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  EMAIL_NOT_VERIFIED,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  RESET_SUCCESS,
  RESET_ERROR,
} from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatus";
import firebase from "../../Config/fbConfig";
import Cookies from "js-cookie";

// Signing up with Firebase
export const signup = (email, password, username) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    const db = firebase.firestore().collection("Users");
    //console.log(email + " " + username + " " + password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((dataBeforeEmail) => {
        db.add({
          Username: username,
          Email: email,
        });
        firebase.auth().onAuthStateChanged(function (user) {
          user.sendEmailVerification();
        });
      })
      .then((dataAfterEmail) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            // Sign up successful
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                "Your account was successfully created! Please check your inbox to verify the email then login.",
            });
          } else {
            // Signup failed
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                "Oops! We couldn't create your account. Please try again.",
            });
          }
        });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNUP_ERROR,
          payload: "Oops! We couldn't create your account. Please try again.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNUP_ERROR,
      payload: "Oops! We couldn't create your account. Please try again.",
    });
  }
};

// Signing in with Firebase
export const signin = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
          console.log("IF", data.user.emailVerified);
          data.user.getIdToken().then(function (token) {
            Cookies.set("token", token, {
              expires: 2,
            });
          });
          //console.log("Token here " + firebase.auth().currentUser.getIdToken());
          /*Cookies.set("token", firebase.auth().currentUser.email, {
            expires: 2,
          });*/
          dispatch({ type: SIGNIN_SUCCESS });
          callback();
        } else {
          console.log("ELSE", data.user.emailVerified);
          dispatch({
            type: EMAIL_NOT_VERIFIED,
            payload: "Please verify your email address to login.",
          });
        }
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNIN_ERROR,
          payload: "Oops! Invalid login credentials.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNIN_ERROR,
      payload: "Oops! Invalid login credentials.",
    });
  }
};

// Signing out with Firebase
export const signout = () => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNOUT_ERROR,
          payload: "Error, we were not able to log you out. Please try again.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNOUT_ERROR,
      payload: "Error, we were not able to log you out. Please try again.",
    });
  }
};

// Reset password with Firebase
export const resetPassword = (email) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        dispatch({
          type: RESET_SUCCESS,
          payload:
            "Check your inbox. We've sent you a secured reset link by e-mail.",
        })
      )
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: RESET_ERROR,
          payload:
            "Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: RESET_ERROR, payload: err });
  }
};
