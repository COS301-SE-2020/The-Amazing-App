import React, { Component,useEffect,useState } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import useLocation from '../Hooks/useLocation'
import MapViewDirections from 'react-native-maps-directions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Location from 'expo-location'
const MapComponent = ({ data, userLoc }) => {
  const [destination , setDestination] = useState(data[0])
  const [userLocation, getUserCoord] = useLocation()
 
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
          strokeWidth={6}
          strokeColor="#2A9D8F"
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
