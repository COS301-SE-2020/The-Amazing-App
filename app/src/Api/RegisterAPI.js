import React ,{useState} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';

export default (email, password, username) => {
  const [isRegistered , setisRegister] = useState(false);
 
  const Register = async (email, password, username)=>{
      if(email === '' ||  password === '' || username === '') {
        Alert.alert('Enter details to signup!')
      }
      else {
    
        const db = firebase.firestore().collection('Users');
      
        firebase.auth().createUserWithEmailAndPassword(email,password).then((res) => {
        db.add({
            Username: username,
            Email: email
        });
          setisRegister(true);
        })
        .catch(error => 
          {
            Alert.alert(error.message)
            setisRegister(false)
          })  
        
      }
  }
  return[isRegistered, Register];
}

