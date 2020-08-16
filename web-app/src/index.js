import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Components/App";

// SETTING UP REDUX STORE
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";

// ENHANCING STORE WITH FIREBASE
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "./Config/fbConfig";
const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore
);
const store = createStoreWithFirebase(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
