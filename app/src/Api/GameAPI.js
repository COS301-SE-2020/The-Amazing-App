import React ,{useState} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';

export const createGroup = (data) => {
   const db = firebase.firestore().collection('groups');  
    db.add({
        ...data,
        createdAt: new Date()
    }).then(()=>{
        Alert('Group Succesfuly Created')
    })

}
