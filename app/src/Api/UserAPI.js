import React ,{useState} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';

var Email =''; 

export const User = (email) =>{
    const [isUser , setUser] = useState('');
    Email = email;

    firebase.firestore().collection('Users').where('Email', '==', email).limit(1).get().then((query) => {  
        const thing = query.docs[0];
        setUser(thing.data().Username);
    }); 
    return isUser;

}

export const getEmail = () =>{

    return Email;

}

export const updateUsername = (username) => {
    firebase.firestore().collection('Users').where('Email', '==', Email).limit(1).get().then((query) => {  
        const thing = query.docs[0];
        thing.ref.update({Username:username});
        Alert.alert('Username Updated!');
    }); 

}

export const updatePassword= (newPassword, oldPassword) => {
   
    
    firebase.auth().signInWithEmailAndPassword(Email,oldPassword)
    .then((res) => {
        var user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(function() {
            Alert.alert('Password Updated!')
        })
    })

}

  

  