import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import projectReducers from "./projectReducer";
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  firebase: firebaseReducer,
  authReducer,
  apiStatusReducer,
  project: projectReducers,
  firestore: firestoreReducer
});
 