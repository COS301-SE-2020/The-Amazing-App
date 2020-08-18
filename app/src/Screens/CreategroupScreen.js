import React ,{  } from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground , Image} from 'react-native'
import { Input,Text, Button, Header,Icon} from 'react-native-elements';
import FooterComponent from '../Componets/FooterComponent';
import { FontAwesome,MaterialIcons, FontAwesome5,SimpleLineIcons } from '@expo/vector-icons'; 
import sc from '../../assets/thor.jpg';
import {getPicture} from '../Api/UserAPI'

import { StatusBar } from 'expo-status-bar';


const CreatgroupScreen = ({navigation})=>{
    return(
       <>
           <StatusBar style='#2A9D8F'/>
            <Header
                centerComponent={{ text: 'Create Group', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={getPicture()}  style={style.imageStyle}/>
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
                />
                 <Input containerStyle={style.inputStyle} placeholder='Group Description'leftIcon={
                 <MaterialIcons name="description" size={24} color="#2A9D8F" />
                }
                />
                <Input containerStyle={style.inputStyle} placeholder='Game Name'leftIcon={
                <FontAwesome5 name="user-circle" size={24} color="#2A9D8F" />
                }
                />
                <Input containerStyle={style.inputStyle} placeholder='Game Location'leftIcon={
                 <SimpleLineIcons name="location-pin" size={24} color="#2A9D8F" />
                }
                />
                <Button
                    buttonStyle={style.buttonStyle}
                    title="Submit"
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