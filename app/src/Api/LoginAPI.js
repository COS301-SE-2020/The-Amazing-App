import React ,{useState} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';

export default () => {
  const [isLoggedIn , setisLoggedIn] = useState(false);
 
  const Login = async (email, password)=>{
      if(email === '' ||  password === '') {
        Alert.alert('Enter details to sign in!')
      }
      else {
    
        const db = firebase.firestore().collection('Users');
      
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((res) => {
            setisLoggedIn(true)
        })
      .catch(error => Alert.alert(error.message))
        .catch(error => 
          {
            Alert.alert(error.message)
            setisLoggedIn(false)
          })  
        
      }
  }
  return[isLoggedIn, Login];
}

