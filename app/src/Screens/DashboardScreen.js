import React ,{ useState} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity,FlatList} from 'react-native'
import {Header} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import sc from '../../assets/t1.jpg';
import { StatusBar } from 'expo-status-bar';


const DashboardScreen = ({navigation})=>{
   
    return(
        <>
            <StatusBar style='#2A9D8F'/>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Dashboard', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={sc}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('CreategroupScreen')}>
               
                    <Text>
                        Simulation
                    </Text>
       
            </TouchableOpacity>
        </>
    )
}
const style = StyleSheet.create({
    imageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#fff',
    }
})
export default DashboardScreen;
