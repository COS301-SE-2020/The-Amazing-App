import React ,{ useState} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity,FlatList} from 'react-native'
import {Header, Divider} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import sc from '../../assets/t1.jpg';
import { StatusBar } from 'expo-status-bar';
import User from '../Api/UserAPI'


const AccountScreen = ({navigation})=>{
    const {imageStyle,imageStyle2, containerStyle, textStyle, statContainer, statAmountStyle, statStyle, statTitleStyle} = style;
    const email = navigation.getParam('email');
    
    return( 
        <>
            <StatusBar style='#2A9D8F'/>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Profile', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile',{email:email})}>
                        <Image source={sc}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
             <View style={containerStyle}>
                 <Image source={sc}  style={imageStyle2}/>
            </View>

            <Divider style={{ backgroundColor: '#2A9D8F',height:1 , padingBottom:20}} />
            <View style={{paddingBottom:15}}>
                
               
                <Text style={textStyle}>Username : {User(email)}</Text>
                <Text style={textStyle}>Email : {email}</Text>
            </View>
            <View style={statContainer}>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>0</Text>
                    <Text style={statTitleStyle}>Games Enrolled</Text>
                </View>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>0</Text>
                    <Text style={statTitleStyle}>Games Completed</Text>
                </View>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>0</Text>
                    <Text style={statTitleStyle}>Groups</Text>
                </View>
            </View>
        </>
    )
}
style = StyleSheet.create({
    imageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#fff',
    },
    imageStyle2:{
        width:200,
        height:200,
        marginTop:15,
        borderRadius:100,
        overflow:'hidden',
        marginBottom:10
    },
    containerStyle:
    {
        alignItems:'center',
        marginTop:10,
        marginBottom:20
    },
    textStyle:{
        alignSelf:'center',
        marginTop:10,
        fontSize:16,
        color:'#2A9D8F'
    },
    statContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        margin:2,
        paddingTop:15
    },
    statStyle:{
        alignItems:'center',
        flex: 1,
    },
    statAmountStyle:{
        color: '#4F5660',
        fontSize:18,
        fontWeight: '300'
    },
    statTitleStyle:{
        color:'#C3C5CD',
        fontSize:13,
        fontWeight:'bold',
        marginTop:4
    }

})
export default AccountScreen;

