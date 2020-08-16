import React from 'react';
import App from './Components/App';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'  
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './Config/fbConfig'

const store = createStore(rootReducer,
    compose(
         applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore })),
         reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
         )
     );

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.querySelector('#root'));

