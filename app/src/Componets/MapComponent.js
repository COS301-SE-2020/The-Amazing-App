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
import { set, Value } from 'react-native-reanimated'
const MapComponent = ({ data, userLoc }) => {
  const [userLocations, getUserCoord] = useLocation()
  const [destination , setDestination] = useState(data[0])
  const [userLocation, setUserLocation] = useState(userLocations)


  const MapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];

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
      showsBuildings
      showsUserLocation 
      showsMyLocationButton 
      showsIndoors 
      userLocationPriority='high'
      userLocationUpdateInterval
      followsUserLocation 
      customMapStyle={MapStyle}
    >
      {data.map((data) => {
        
        return (
            <Marker
            coordinate={{ latitude: data.latitude, longitude: data.longitude }}
            key={data.latitude}
            
            pinColor={pinColor}
          >
            <Callout>
              <Text>Lets Go</Text>
            </Callout>
     
          </Marker>
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
