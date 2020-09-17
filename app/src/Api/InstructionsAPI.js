import React ,{useContext} from 'react';
import Firebase from '../Config/Config';
import {GameContext} from '../Context/GameContext';
import firebase from 'firebase/app';
import {Alert} from 'react-native';

export default () => {
  const gameContext = useContext(GameContext);

  const gameDescription = async ()=>{
    try {
            const game = await firebase.firestore().collection('projects').doc(gameContext.gameId).get();
            gameContext.setGameDesc(game.data().description);
            //On success
        }catch (error) {
            //On Fail
            console.log(error);
            
        }
  }
  const gameLocation = async ()=>{
    try {
            const game = await firebase.firestore().collection('projects').doc(gameContext.gameId).get();
            gameContext.setGameLocation(game.data().properties[0].location);
            gameContext.setProperties(game.data().properties);
            console.log(gameContext.gameProperties)
            //On success
        }catch (error) {
            //On Fail
            console.log(error);
            
        }
  }
  return [gameDescription,gameLocation]
}

