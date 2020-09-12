import React ,{useState, useContext} from 'react';
import firebase from '../Config/Config';
import 'firebase/storage';
import {YellowBox} from 'react-native';
import {UserContext} from '../Context/AuthContext';
YellowBox.ignoredYellowBox = ['Warning: ReactNative.createElement'];

export const updateUsername =async (username) => {
    const userContext = useContext(UserContext);

    try {
        const query = await firebase.firestore().collection('Users').where('Email', '==', userContext.email)
        .limit(1).get();
        const user = query.docs[0];
        user.ref.update({Username:username});
        userContex.setUsername(username)
        //On Success
    } catch (error) {
        //Print this on fail
    }  
}

export const updatePassword= async(newPassword, oldPassword) => {
    const userContext = useContext(UserContext);

   try {
        await firebase.auth().signInWithEmailAndPassword(userContext.email,oldPassword)
        const user = firebase.auth().currentUser;
        user.updatePassword(newPassword)
        //on success
   } catch (error) {
       //on fail
   }
}

export const updatePicture = async (image) => {
    const userContext = useContext(UserContext);
    
    try {
        const response = await fetch(image);
        const blob = await response.blob();
        var ref = firebase.storage().ref(Email);
        ref.put(blob);
        const downloadURL = await firebase.storage().ref(Email).getDownloadURL();
        firebase.firestore().collection('Users').where('Email', '==', Email).limit(1).get().then((query) => {  
            const thing = query.docs[0];
            thing.ref.update({Picture:downloadURL});
        }); 

        const query2 = await  firebase.firestore().collection('Users')
        .where('Email', '==',email).limit(1).get();
        const user2 = query2.docs[0];
        const picture = await user2.data().Picture; 
        const result = {uri: picture};
        userContext.setImage(result);
        //on success
    } catch (error) {
        //on fail
    }
}


export const forgotPassword = async () => {
    const userContext = useContext(UserContext);
    
    try {
        await firebase.auth().sendPasswordResetEmail(userContext.email);
        //on success
    } catch (error) {
        //if failed
    }
  }
