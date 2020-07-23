import React ,{  } from 'react';
import {View, Text} from 'react-native'
import {SafeAreaView} from 'react-navigation';
import MapComponent from '../Componets/MapComponent'

const SimulationScreen = ()=>{

    return(
        <SafeAreaView>
            <MapComponent />
        </SafeAreaView>
    )
}

export default SimulationScreen;