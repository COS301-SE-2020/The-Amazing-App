import React, { Component,useEffect,useState } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import useLocation from '../Hooks/useLocation'
import MapViewDirections from 'react-native-maps-directions'
import * as Speech from 'expo-speech'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  watchPositionAsync,
  Accuracy,
} from 'expo-location'
import { Value } from 'react-native-reanimated'
const MapComponent = ({ data, userLoc }) => {
  const [userLocations, getUserCoord] = useLocation()
  const [destination , setDestination] = useState(data[0])
  const [userLocation, setUserLocation] = useState([])
  const [reachDestination,setReachDestination ] = useState([])

  const startWatching = async () => {
    try {
        await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 100000,
            distanceInterval: 10,
          },
          (location) => {
            const coords = {'latitude':location.coords.latitude,'longitude':location.coords.longitude}
            setUserLocation(coords)
            if(reachDestination == userLocation){
              Speech.speak('Move on to the next stage')
              setDestination(data[1])
            }
        
          }
      );
    } catch (e) {
      setErr(e);
    }
  };
  setInterval(()=>{
    startWatching();
},100)
  useEffect(() => {
    startWatching();
  },[]);
  const { mapStyle } = style
  const pinColor = '#5c0cc4'
  const googleMapApi = 'AIzaSyAcIqhajjM3plk6WMCTfrHmJtUvB6xXzrI'
  return (
    <MapView
      style={mapStyle}
      initialRegion={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {data.map((data) => {
        return (
        
            <MapView.Marker
            coordinate={{ latitude: data.latitude, longitude: data.longitude }}
            pinColor={pinColor}
          >
            <Callout>
              <Text>Lets Go</Text>
            </Callout>
     
          </MapView.Marker>
        )
      })}
          <MapViewDirections
          origin={userLocation}
          destination={destination}
          apikey={googleMapApi}
          mode='DRIVING'
          language='en's
          strokeWidth={6}
          strokeColor="#2A9D8F"
          optimizeWaypoints={true}
          resetOnChange={false}
          precision={"low"}
          splitWaypoints={true}
          onStart={(params)=>Speech.speak('Ready to start!! lets go')}
          onReady={(results)=>{
            console.log(results.coordinates)
            console.log(results.coordinates[results.coordinates.length-1])
            setReachDestination(userLocation)
            //setUserLocation(results.coordinates[results.coordinates.length-1])
            console.log(destination)
          }}
          onError={(error)=>console.log(error)}
        />
    </MapView>
  )
}

const style = StyleSheet.create({
  mapStyle: {
    height: '100%',
  },
})

export default MapComponent
