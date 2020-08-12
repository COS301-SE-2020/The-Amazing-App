import React ,{useState} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';

const User = (email) => {
    const [isUser , setUser] = useState('');

    firebase.firestore().collection('Users').where('Email', '==', email).limit(1).get().then((query) => {  
        const thing = query.docs[0];
        setUser(thing.data().Username);
    }); 
    return isUser;

}

export default(User);
  

  