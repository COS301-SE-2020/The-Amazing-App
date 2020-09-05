import React,{useState} from 'react';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';

export default ()=>{
    const [latitude , setLatitude] = useState(0);
    const [longitude , setLongitude] = useState(0);
    const [location , setLocation] = useState([]);

    const getCoordinates = async (address)=>{
        setLocation(Location.geocodeAsync('Gautrain Hatfield Station, Cnr Grosvenor Road and Arcadia Street, Hatfield, Pretoria, Gauteng 0083, South Africa'));
        console.log(location);
    }

    return [location, getCoordinates];
}