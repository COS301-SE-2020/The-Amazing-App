import React,{ Component } from 'react';
import {StyleSheet,Image, View, Text} from 'react-native';
import MapView,{Marker, Callout} from 'react-native-maps'
import useLocation from '../Hooks/useLocation';

const MapComponent = ()=>{
    const data = [{'latitude':-26.2023,'longitude':28.0436},{'latitude':-26.21,'longitude':28.0436},{'latitude':-26.21,'longitude':28.049}]
    const [latitude, longitude, getCoordinates] = useLocation();
    const {mapStyle} = style;
    return(
        <MapView style={mapStyle}
         initialRegion={{
             latitude:data[0].latitude,
             longitude:data[0].longitude,
             latitudeDelta:0.01,
             longitudeDelta:0.01
         }}
         >
             <Marker coordinate={{latitude:-26.2023,longitude:28.0436}} >
                <Callout>
                    <>
                        <Text>Task 1</Text>
                        <Text> Required to find a QR code</Text>
                    </>
                </Callout>
             </Marker>   
        </MapView>
       )
}

const style = StyleSheet.create({
    mapStyle:{
        height: '100%'
    }
})

export default MapComponent;