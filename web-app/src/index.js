import React from 'react';
import App from './Components/App';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'  

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.querySelector('#root'));
import React from "react";
import App from "./Components/App";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.querySelector("#root"));
