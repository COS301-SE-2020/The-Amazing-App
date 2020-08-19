import React ,{useState} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';

export default () => {
  const [isLoggedIn , setisLoggedIn] = useState(false);
  const [userId, setUserid] = useState('');
 
 
  const Login = async (email, password)=>{
      if(email === '' ||  password === '') {
        Alert.alert('Enter details to sign in!')
      }
      else {
    
        const db = firebase.firestore().collection('Users');
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((response) => {
          const uid = response.user.uid
            setUserid(uid)
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
            console.log(uid);
   
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
  return[isLoggedIn, Login,userId];
}

