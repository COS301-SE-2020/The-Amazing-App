import React ,{useContext, useEffect} from 'react';
import Firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';
import {UserContext} from '../Context/UserContext';
import {GameContext} from '../Context/GameContext';
import firebase from 'firebase/app';
import {Alert} from 'react-native';
import useResults from '../Hooks/useResults'

export default () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const gameContext = useContext(GameContext);
  const [results,getGroups] = useResults();

  const JoinGroup = async ()=>{
    try {
            const doc = await Firebase.firestore().collection('groups').where('groupName', '==', gameContext.groupName).limit(1).get();
            const group = doc.docs[0];
            group.ref.update({member:firebase.firestore.FieldValue.arrayUnion(authContext.userId)});
            const query = await firebase.firestore().collection('Users').where('Email', '==', userContext.email).limit(1).get();
            const user = query.docs[0];
            const games = await user.data().GamesPlayed; 
            const groups = await user.data().Groups; 
            if (groups){
              user.ref.update({Groups:groups+1})
              userContext.setNumGroups(groups+1);
            }
            else {
              user.ref.update({Groups:1})
              userContext.setNumGroups(1);
            }
            await getGroups();
            await gameContext.setGroups(results);
            Alert.alert('Joined group ' + gameContext.groupName +'!')
            
            //On success
        }catch (error) {
            //On Fail
            console.log(error);
            Alert.alert('Unable to join group!');
            
        }
  }
  return [JoinGroup]
}

