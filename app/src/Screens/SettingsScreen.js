import React ,{ useState} from 'react';
import { StyleSheet,Image, TouchableOpacity, View, Text} from 'react-native'
import {Header, Divider} from 'react-native-elements';
import {} from 'react-native-paper';
import { Feather, AntDesign,MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { Switch } from 'react-native-paper';
import sc from '../../assets/t1.jpg';
import { StatusBar } from 'expo-status-bar';



const SettingsScreen = ({navigation})=>{
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
   
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
            <View style={style.containerStyle}>
                <View style={style.headStyle}/>
                <View style={style.detailStyle}>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row',flex:1, marginTop:15}}>
                            <AntDesign name="user" size={30} color="#2A9D8F" />
                            <Text style={style.textStyle}>Change usename</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={35} color="#2A9D8F" style={{marginLeft:'48%'}} />
                        </View>
                    </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <AntDesign name="lock" size={30} color="#2A9D8F" />
                            <Text style={style.textStyle}>Change password</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={35} color="#2A9D8F" style={{marginLeft:'47%'}} />
                        </View>
                    </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <AntDesign name="picture" size={30} color="#2A9D8F" />
                            <Text style={style.textStyle}>Change profile picture</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={35} color="#2A9D8F" style={{marginLeft:'39%'}} />
                        </View>
                    </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
                </View>
                <View style={style.detailStyle}>
                    <View style={{flexDirection:'row', marginTop:15}}>
                          <MaterialCommunityIcons name="theme-light-dark" size={30} color="#2A9D8F" />
                          <Text style={style.textStyle}>Change theme</Text>
                          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{marginLeft:'38%'}} />
                    </View>
                    <Divider style={style.dividerStyle2} />
                    <TouchableOpacity>
                    <View style={{flexDirection:'row', marginTop:15}}>
                          <AntDesign name="delete" size={28} color="#f54922" />
                          <Text style={{fontSize:15,marginTop:5,fontWeight:'bold',color:'#f54922',paddingLeft:5}}>Delete Account</Text>
                          <MaterialIcons name="keyboard-arrow-right" size={35} color="#f54922" style={{marginLeft:'52%'}} />
                    </View>
                    </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
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
    containerStyle:{
        backgroundColor:'#d4d9d5',
        width:'100%',
        height:'100%',
    },
    headStyle:{
        backgroundColor:'white',
        width:'100%',
        height:'10%',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'rgba(42, 157, 143, 0.4)'
    },
    detailStyle:{
        backgroundColor:'white',
        width:'100%',
        height:'25%',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'rgba(42, 157, 143, 0.4)',
        marginTop:30,

    },
    textStyle:{
        fontSize:15,
        marginTop:5,
        fontWeight:'bold',
        color:'#2A9D8F',
        paddingLeft:5
    },
    dividerStyle:{ 
        backgroundColor: '#2A9D8F',
        height:1 , 
        marginTop:10,
        width:'94%',
        alignSelf:'flex-end'
    },
    dividerStyle2:{
        backgroundColor: 'rgba(42, 157, 143, 0.24)',
        height:1 , 
        marginTop:10,
        width:'94%',
        alignSelf:'flex-end'
    }
})
export default SettingsScreen;
