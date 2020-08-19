import React ,{ useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground , Image} from 'react-native'
import { Input,Text, Button, Header,Icon} from 'react-native-elements';
import FooterComponent from '../Componets/FooterComponent';
import { FontAwesome,MaterialIcons, FontAwesome5,SimpleLineIcons } from '@expo/vector-icons'; 
import LoginApi from '../Api/LoginAPI';
import sc from '../../assets/thor.jpg';
import scs from '../../assets/t1.jpg';

import { StatusBar } from 'expo-status-bar';


const CreatgroupScreen = ({navigation})=>{

    /**
     * Group details for a game being created 
     */
    const [groupName, setGroupname] =useState('')
    const [gameName, setGamename] =useState('')
    const [groupDescription, setGroupdescription] =useState('')
    const [gameLocation, setGameLocation] =useState('')
    const [userId,isLoggedIn] =  LoginApi();

    const createGroup=()=>{
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
        console.log(isLoggedIn);
    }


    return(
       <>
           <StatusBar style='#2A9D8F'/>
            <Header
                centerComponent={{ text: 'Create Group', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={scs}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <View style={style.titleContainer}>
                <Text style={style.titleStyle}>Game Details</Text>
            </View>
            <View style={style.detailContainer}>
                <Input containerStyle={style.inputStyle} placeholder='Group Name'leftIcon={
                    <FontAwesome name="group" size={24} color="#2A9D8F" />
                    }
                 onChangeText={setGroupname} value={groupName}
                />
                 <Input containerStyle={style.inputStyle} placeholder='Group Description'leftIcon={
                 <MaterialIcons name="description" size={24} color="#2A9D8F" />
                }
                     onChangeText={setGroupdescription} value={groupDescription}
                />
                <Input containerStyle={style.inputStyle} placeholder='Game Name'leftIcon={
                <FontAwesome5 name="user-circle" size={24} color="#2A9D8F" />
                }
                onChangeText={setGamename} value={gameName}
                />
                <Input containerStyle={style.inputStyle} placeholder='Game Location'leftIcon={
                 <SimpleLineIcons name="location-pin" size={24} color="#2A9D8F" />
                }
                onChangeText={setGameLocation} value={gameLocation}
                />
                <Button
                    buttonStyle={style.buttonStyle}
                    title="Submit"
                    onPress={()=>createGroup()}
                />
            </View>
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
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#2A9D8F',
    },
    titleContainer:{
        backgroundColor:'rgba(42, 157, 143, 0.4)',
        alignItems:'center',
        marginTop:30,
        paddingBottom:15,
        paddingTop:15,
        marginLeft:35,
        marginRight:35,
        borderRadius:5
    },
    detailContainer:{
        marginTop:30,
    },
    inputStyle:{
        width:'70%',
        alignSelf:'center',
    },
    buttonStyle:{
        width:150,
        height:45,
        marginBottom:35,
        alignSelf:'center',
        borderRadius:10,
        backgroundColor: "#2A9D8F",
        marginTop:15
    }
})


export default CreatgroupScreen;