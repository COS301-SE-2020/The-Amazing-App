import React ,{useContext} from 'react';
import Firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';
import firebase from 'firebase/app';
import {Alert} from 'react-native';

export default () => {
  const authContext = useContext(AuthContext);

  const JoinGroup = async (groupName)=>{
    try {
            const doc = await Firebase.firestore().collection('groups').where('groupName', '==', groupName).limit(1).get();
            const group = doc.docs[0];
            group.ref.update({member:firebase.firestore.FieldValue.arrayUnion(authContext.userId)});
            //On success
        }catch (error) {
            //On Fail
            Alert.alert('Unable to join group!');
            
        }
  }
  return [JoinGroup]
}

