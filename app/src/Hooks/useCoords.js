import React,{useState} from 'react';
import * as Location from 'expo-location';

export default ()=>{
    const [latitude , setLatitude] = useState(0);
    const [longitude , setLongitude] = useState(0);

    const getCoordinates = async (address)=>{
        try{
            const results = await Location.geocodeAsync(address);
            setLatitude(results[0].latitude);
            setLongitude(results[0].longitude);
        }
        catch{
            console.log('error');
        }
    }

    return [latitude, longitude, getCoordinates];
}