import React ,{useContext} from 'react';
import Firebase from '../Config/Config';
import {GameContext} from '../Context/GameContext';
import firebase from 'firebase/app';
import {Alert} from 'react-native';
import * as Location from 'expo-location';
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
    let address = []
    let coord = []

    try {
            const game = await firebase.firestore().collection('projects').doc(gameContext.gameId).get();
            await gameContext.setGameLocation(game.data().properties[0].location);
            await gameContext.setProperties(game.data().properties);

            address.push(game.data().properties[0].location)
            address.push(game.data().properties[1].location)
            address.push(game.data().properties[2].location)

            let results = await Location.geocodeAsync(address[0])
            coord.push({'latitude':results[0].latitude, 'longitude':results[0].longitude})
            results = await Location.geocodeAsync(address[1])
            coord.push({'latitude':results[0].latitude, 'longitude':results[0].longitude})
            results = await Location.geocodeAsync(address[2])
            coord.push({'latitude':results[0].latitude, 'longitude':results[0].longitude})

         
            gameContext.setCoord(coord)
            //On success
        }catch (error) {
            //On Fail
            console.log(error);
            
        }
  }
  return [gameDescription,gameLocation]
}

