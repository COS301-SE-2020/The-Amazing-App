import React ,{  } from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground , Image} from 'react-native'
import { Input,Text, Button, Header,Icon} from 'react-native-elements';
import FooterComponent from '../Componets/FooterComponent';
import { FontAwesome,MaterialIcons, FontAwesome5,SimpleLineIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';


const JoingroupScreen = ({navigation})=>{
    return(
       <>
           <StatusBar style='#2A9D8F'/>
            <Header
                centerComponent={{ text: 'Join Group', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <View style={style.overLayer}>
           <View style={style.titleContainer}>
                <Text style={style.titleStyle}>Group Details</Text>
            </View>
            <View style={style.blade} >

            </View>
            <View style={style.detailContainer}>
            <Input containerStyle={style.inputStyle}
                placeholderTextColor='white'
                placeholder='Group ID'leftIcon={
                 <SimpleLineIcons name="globe-alt" size={24} color="white" />
                }
                
                />
                <Button
                    buttonStyle={style.buttonStyle}
                    title="Submit"
                    onPress={()=>{
                        creater()
                        navigation.navigate('Dashboard')
                    }
                    }
                />
            </View>
            </View>
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
        color:'white',
    },
    titleContainer:{
        backgroundColor:'rgba(42, 157, 143, 0.7)',
        alignItems:'center',
        marginTop:30,
        paddingBottom:15,
        paddingTop:15,
        marginLeft:35,
        marginRight:35,
        borderRadius:5
    },
    detailContainer:{
        backgroundColor:'rgba(42, 157, 143, 0.7)',
        alignItems:'center',
        paddingBottom:15,
        paddingTop:15,
        marginLeft:35,
        marginRight:35,
        borderRadius:5
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
    },
    overLayer:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(42, 157, 143, 0.01)',
    },
    blade:{
        backgroundColor:'white',
        alignItems:'center',
        paddingBottom:15,
        paddingTop:15,
        marginLeft:35,
        marginRight:35,
        borderRadius:5,
    }
})


export default JoingroupScreen;