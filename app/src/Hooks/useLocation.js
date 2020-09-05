import React,{useState} from 'react';
import * as Location from 'expo-location';

export default ()=>{
    const [latitude , setLatitude] = useState(0);
    const [longitude , setLongitude] = useState(0);

    const getCoordinates = async (address)=>{
        try{
            const results = await Location.geocodeAsync('Gautrain Hatfield Station, Cnr Grosvenor Road and Arcadia Street, Hatfield, Pretoria, Gauteng 0083, South Africa');
            setLatitude(results[0].latitude);
            setLongitude(results[0].longitude);
        }
        catch{
            console.log('error');
        }
    }

    return [latitude, longitude, getCoordinates];
}