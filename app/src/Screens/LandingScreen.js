import React  from 'react';
import { StyleSheet,Image,View, TouchableOpacity, SafeAreaView, ImageBackground, Text} from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import sc from '../../assets/back3.jpg';
import { StatusBar } from 'expo-status-bar';


const LandingScreen = ({navigation})=>{
   
    return(
        <>
            <SafeAreaView>
              <ImageBackground source={sc}  style={{width:'100%', height:'100%',alignSelf:'center'}}>
              <Text style={style.titleStyle}>The Amazing App</Text>
              </ImageBackground>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    titleStyle:{
        fontSize:45,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        marginTop:100,
        borderColor:'#f7720c',
    }
   
})
export default LandingScreen;
