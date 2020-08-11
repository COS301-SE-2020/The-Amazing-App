import React ,{ useState} from 'react';
import { StyleSheet,Image, TouchableOpacity} from 'react-native'
import {Header} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import sc from '../../assets/t1.jpg';
import { StatusBar } from 'expo-status-bar';


const SettingsScreen = ({navigation})=>{
   
    return(
        <>
            <StatusBar style='#2A9D8F'/>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Settings', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={sc}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
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
export default SettingsScreen;
