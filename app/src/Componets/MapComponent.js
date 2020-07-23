import React,{ Component } from 'react';
import {StyleSheet,Image, View, Text} from 'react-native';
import MapView,{Marker, Callout} from 'react-native-maps'

const MapComponent = ()=>{
    const {mapStyle} = style;
    return(
        <MapView style={mapStyle}
         initialRegion={{
             latitude:-26.2023,
             longitude:28.0436,
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
             <Marker coordinate={{latitude:-26.21,longitude:28.0436}}>
              <Callout >
                    <View>
                        <Text>Task 2</Text>
                        <Text>Treasure around the corner</Text>
                    </View>
                </Callout>
             </Marker>
             <Marker coordinate={{latitude:-26.21,longitude:28.049}} title='TITLE 1'>
                <Callout >
                        <View>
                            <Text>Task 3</Text>
                        </View>
                    </Callout>
             </Marker>    
             <Marker coordinate={{latitude:-26.2142,longitude:28.049}}>
                <Callout >
                    <View>
                        <Text>Task 4</Text>
                    </View>
                </Callout>
             </Marker>
             <Marker coordinate={{latitude:-26.2142,longitude:28.04}} title='TITLE 1'>
              <Callout >
                    <View>
                        <Text>Task 5</Text>
                    </View>
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