import React ,{  } from 'react';
import {SafeAreaView} from 'react-navigation';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import MapComponent from '../Componets/MapComponent';
import  {Header} from 'react-native-elements';
import {getPicture} from '../Api/UserAPI';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialIcons } from '@expo/vector-icons'; 

const SimulationScreen = ({navigation})=>{
    return(
        <SafeAreaView>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                    <MaterialIcons name="arrow-back" size={30} color="#fff" />
                </TouchableOpacity>}
                centerComponent={{ text: 'Simulation', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={getPicture()}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <MapComponent />
        </SafeAreaView>
    )
}

const style  = StyleSheet.create({
    imageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#fff',

    }
})

export default SimulationScreen;