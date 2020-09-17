import  React, {useState,useContext} from 'react';
import firebase from '../Config/Config';
import {GameContext} from '../Context/GameContext';
import * as Location from 'expo-location';
export default ()=>{
    const gameContext = useContext(GameContext);
    const coordArray = [];
    const setGameState =async()=>{
        try{
           await gameContext.gameProperties.forEach(async (element) => {
                const results = await Location.geocodeAsync(element.location);
                const data = {'latitude':results[0].latitude, 'longitude':results[0].longitude}
                coordArray.push(data)
            });
            console.log(gameContext.gameProperties)
           console.log(coordArray)
        }
        catch{
            console.log('error');
        }
    }  

    return [setGameState];
};