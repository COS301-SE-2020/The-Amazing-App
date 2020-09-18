import React ,{ useState,useContext } from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground , Image} from 'react-native'
import { Input,Text, Button, Header,Icon} from 'react-native-elements';
import {SimpleLineIcons,Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import JoinGroupAPI from '../Api/JoinGroupAPI'
import {UserContext} from '../Context/UserContext';
import {GameContext} from '../Context/GameContext';

const JoingroupScreen = ({navigation})=>{
    const userContext = useContext(UserContext);
    const gameContext = useContext(GameContext);
    const [JoinGroup] = JoinGroupAPI();
    return(
       <>
           <StatusBar style='#2A9D8F'/>
           <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Join Group', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={userContext.image}  style={style.imageStyle}/>
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
                placeholder='Enter Group Name'leftIcon={
                 <SimpleLineIcons name="globe-alt" size={24} color="white" />
                }
                onChangeText={gameContext.setGroupName} value={gameContext.groupName}
                />
                <Button
                    buttonStyle={style.buttonStyle}
                    title="Join"
                    onPress={async ()=>{
                        await JoinGroup();
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
        borderRadius:5,
        marginTop:200
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
        backgroundColor:'rgba(42, 157, 143, 0.4)'
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