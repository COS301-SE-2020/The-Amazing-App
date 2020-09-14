import React,{useState, useEffect,useContext} from 'react';
import {UserContext} from '../Context/UserContext'
import {
    watchPositionAsync,
    Accuracy,
  } from 'expo-location'

export default ()=>{
    const startWatching = async () => {
        const userContext = useContext(UserContext);
        try {
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 100000,
                distanceInterval: 10,
              },(location) => {
                const coords = {'latitude':location.coords.latitude,'longitude':location.coords.longitude}
                userContext.setUserLocation(loc)
              });
        }catch (e){
            console.log(e)
        }
      };     

    return [startWatching];
}