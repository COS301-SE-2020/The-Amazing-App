import React ,{useContext} from 'react';
import firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';

export default () => {

  const Register = async (email, password, username)=>{
    const authContext = useContext(AuthContext);
    try {
        const db = firebase.firestore().collection('Users');
        await  firebase.auth().createUserWithEmailAndPassword(email,password);
        db.add({Username: username,Email: email});
        authContext.isRegistered(true);
    } catch (error) {
      authContext.isRegistered(false);
    }   
  }
  return [Register];
}

