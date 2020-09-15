import React ,{useState, useContext} from 'react';
import firebase from '../Config/Config';
import 'firebase/storage';
import {Alert, YellowBox} from 'react-native';
import {UserContext} from '../Context/UserContext';
YellowBox.ignoredYellowBox = ['Warning: ReactNative.createElement'];

export default () => {
    const userContext = useContext(UserContext);

const updateUsername =async (username) => {

    try {
        const query = await firebase.firestore().collection('Users').where('Email', '==', userContext.email)
        .limit(1).get();
        const user = query.docs[0];
        user.ref.update({Username:username});
        Alert.alert('Username updated!')
        //On Success
    } catch (error) {
        //Print this on fail
        console.log(error);
    }  
}

const updatePassword= async(email,newPassword, oldPassword) => {
   try {
        await firebase.auth().signInWithEmailAndPassword(email,oldPassword)
        const user = firebase.auth().currentUser;
        user.updatePassword(newPassword);
        Alert.alert('Password updated!');
        //on success
   } catch (error) {
       //on fail
       Alert.alert('Password not updated!');
   }
}

const updatePicture = async (image) => {
    
    try {
        const response = await fetch(image);
        const blob = await response.blob();
        firebase.storage().ref(userContext.email).put(blob);
        const downloadURL = await firebase.storage().ref(userContext.email).getDownloadURL();
        firebase.firestore().collection('Users').where('Email', '==', userContext.email).limit(1).get().then((query) => {  
            const thing = query.docs[0];
            thing.ref.update({Picture:downloadURL});
            const result = {uri: downloadURL};
            userContext.setImage(result);
            Alert.alert('Profile picture updated!')
        }); 

        //on success
    } catch (error) {
        //on fail
        console.log(error)
    }
}


const forgotPassword = async () => {
    try {
        await firebase.auth().sendPasswordResetEmail(userContext.email);
        //on success
        Alert.alert('Check your email!');
    } catch (error) {
        //if failed
        console.log(error);
    }
  }

  
  return [forgotPassword, updateUsername,updatePassword,updatePicture]
}
