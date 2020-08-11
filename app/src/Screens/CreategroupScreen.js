import React ,{  } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { Input, Button, Header} from 'react-native-elements'
import sc from '../../assets/t1.jpg';

const CreatgroupScreen = ({navigation})=>{
    const {titleStyle, titleContainer, inputStyle, buttonStyle} = style;
    return(
       <>
           <StatusBar style='#2A9D8F'/>
            <Header
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={sc}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
        <ImageBackground source={sc}>

        </ImageBackground>
       <Text>CreatgroupScreen</Text>
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


export default CreatgroupScreen;