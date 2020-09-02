import React ,{  } from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground , Image} from 'react-native'
import { Input,Text, Button, Header,Icon} from 'react-native-elements';
import FooterComponent from '../Componets/FooterComponent';
import {getPicture} from '../Api/UserAPI'
import { StatusBar } from 'expo-status-bar';

const JoingroupScreen = ({navigation})=>{
    return(
       <>
           <StatusBar style='#2A9D8F'/>
            <Header
                centerComponent={{ text: 'Create Group', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <FooterComponent />
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

    },
})


export default JoingroupScreen;