import React, { Component,useEffect,useState,useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import useLocation from '../Hooks/useLocation'
import MapViewDirections from 'react-native-maps-directions'
import {UserContext} from '../Context/UserContext'
import {GameContext} from '../Context/GameContext';
import * as Speech from 'expo-speech'
import { TouchableOpacity } from 'react-native-gesture-handler'


const MapComponent = ({ data}) => {
  const [startWatching] = useLocation()
  const [destination , setDestination] = useState(data[0])
  const MapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
  const userContext = useContext(UserContext);
  const gameContext = useContext(GameContext);

  useEffect(() => {
    //startWatching();
  },[]);
  const { mapStyle } = style
  const pinColor = '#5c0cc4'
  const googleMapApi = 'AIzaSyAcIqhajjM3plk6WMCTfrHmJtUvB6xXzrI'
  return (
    <MapView
      style={mapStyle}
      initialRegion={{
        latitude: userContext.userLocation.latitude,
        longitude: userContext.userLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsBuildings = {true}
      showsUserLocation = {true}
      showsMyLocationButton = {true}
      userLocationPriority='high'
      followsUserLocation = {true}
      showsCompass     
      userLocationFastestInterval
      //onUserLocationChange={coord=>userContext.setUserLocation(coord)}
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
          origin={userContext.userLocation}
          destination={destination}
          apikey={googleMapApi}
          mode='DRIVING'
          language='en's
          strokeWidth={8}
          strokeColor="#2A9D8F"
          optimizeWaypoints={true}
          resetOnChange={false}
          precision={"low"}
          onReady={()=>{Speech.speak('Ready to start!  lets go')}}
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