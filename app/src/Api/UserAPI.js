import React ,{useState} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';
import 'firebase/storage';
import sc from '../../assets/t1.jpg';

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

export const updatePicture = async (image) => {
  
    const response = await fetch(image);
    const blob = await response.blob();
    var ref = firebase.storage().ref(Email);
    ref.put(blob);
    const downloadURL = await firebase.storage().ref(Email).getDownloadURL();
    firebase.firestore().collection('Users').where('Email', '==', Email).limit(1).get().then((query) => {  
        const thing = query.docs[0];
        thing.ref.update({Picture:downloadURL});
    }); 
    Alert.alert('Profile Picture Updated!')
}

export const getPicture =() => {
    const [picture , setPicture] = useState('');
    firebase.firestore().collection('Users').where('Email', '==', Email).limit(1).get().then((query) => {  
        const thing = query.docs[0];
        setPicture(thing.data().Picture);
    }); 

    if (picture === ''){
        return sc;
    }
    const result = {uri: picture}
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    console.log(picture)
    return result;
}

export const forgotPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(function (user) {
        Alert.alert('Please check your email...')
      })
  }
