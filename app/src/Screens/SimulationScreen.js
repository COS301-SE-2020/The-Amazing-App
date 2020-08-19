import React ,{  } from 'react';
import {SafeAreaView} from 'react-navigation';
import {TouchableOpacity, Image} from 'react-native';
import MapComponent from '../Componets/MapComponent';
import  {Header} from 'react-native-elements';
import {getPicture} from '../Api/UserAPI';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons'; 

const SimulationScreen = ()=>{
    return(
        <SafeAreaView>
            <Header
                leftComponent={
                <TouchableOpacity >
                    <Feather name="menu" size={30} color='#fff'/>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>}
                centerComponent={{ text: 'Simulation', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <MapComponent />
        </SafeAreaView>
    )
}

export default SimulationScreen;