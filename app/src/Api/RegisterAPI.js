import React ,{useContext} from 'react';
import firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';
import { UserContext } from '../Context/UserContext';

export default () => {
  const authContext = useContext(AuthContext);
  const userContext =useContext(UserContext);
  const Register = async (email, password, username)=>{
    
    try {
        const db = firebase.firestore().collection('Users');
        const User = await  firebase.auth().createUserWithEmailAndPassword(email,password);
        db.add({Username: username,Email: email,Points:0,GamesPlayed:0,Groups:0});
        authContext.setUserId(User.user.uid);
        userContext.setImage(result);
        authContext.setisRegistered(true);
    } catch (error) {
      authContext.setisRegistered(false);
      console.log(error)
    }   
  }
  return [Register];
}

