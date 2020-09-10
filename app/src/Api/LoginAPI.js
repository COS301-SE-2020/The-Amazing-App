import React ,{useContext} from 'react';
import firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';
import {UserContext} from '../Context/UserContext';
import source from '../../assets/t1.jpg';
import { Alert } from 'react-native';
import 'firebase/firestore'

export default () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const Login = async (email, password)=>{
      try {
        const User = await firebase.auth().signInWithEmailAndPassword(email,password);
        const query = await firebase.firestore().collection('Users').where('Email', '==', email).limit(1).get();
        const user = query.docs[0];
        const picture = await user.data().Picture; 
        const result = {uri: picture};
        authContext.setisLoggedIn(true);
        authContext.setUserId(User.user.uid)
        userContext.setUsername(user.data().Username);
        userContext.setEmail(email);
        picture == null?userContext.setImage(source):userContext.setImage(result);
      } catch (error) {
        authContext.setisLoggedIn(false);
        console.log(error);
      }      

  }
  return [Login]
}

