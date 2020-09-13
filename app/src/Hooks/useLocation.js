import React,{useState, useEffect} from 'react';
import * as Location from 'expo-location';

export default ()=>{
    const [userLocations, setUserLocation] = useState([]);
    useEffect(() => {
        getUserCoord()
    },[]) 
    const getUserCoord = async ()=>{
        let { status } = await Location.requestPermissionsAsync()
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        }
        let location = await Location.getCurrentPositionAsync({})
        const loc = {'latitude':location.coords.latitude,'longitude':location.coords.longitude}
        setUserLocation(loc) 
    }

    return [userLocations, getUserCoord];
}