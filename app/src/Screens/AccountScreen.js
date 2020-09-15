import React ,{ useContext} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity,FlatList} from 'react-native'
import {Header, Divider} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import {MaterialIcons, FontAwesome, AntDesign} from '@expo/vector-icons'
import {UserContext} from '../Context/UserContext';

const AccountScreen = ({navigation})=>{
    const { containerStyle, textStyle, statContainer, statAmountStyle, statStyle, statTitleStyle} = style;
    const userContext = useContext(UserContext);
    
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
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                         <Image source={userContext.image}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
             <View style={containerStyle}>
                <Image source={userContext.image}  style={style.imageStyle2}/>
            </View>

            <Divider style={{ backgroundColor: '#2A9D8F',height:1 , padingBottom:20}} />
            <View style={{paddingBottom:15}}>
                
                
                <Text style={textStyle}><AntDesign name="user" size={24} color='#2A9D8F' /> Username : {userContext.username}</Text>
                <Text style={textStyle}><AntDesign name="mail" size={24} color='#2A9D8F' />Email : {userContext.email}</Text>
            </View>
            <View style={statContainer}>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>{userContext.points}</Text>
                    <Text style={statTitleStyle}>Points</Text>
                    <AntDesign name="star" size={24} color='white' />
                </View>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>{userContext.numGames}</Text>
                    <Text style={statTitleStyle}>  Games Completed</Text>
                    <AntDesign name="Trophy" size={24} color='white' />
                </View>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>{userContext.numGroups}</Text>
                    <Text style={statTitleStyle}>Groups</Text>
                    <AntDesign name="team" size={24} color='white' />
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
        marginTop:120,
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
        marginTop:15,
        padding:15,
        backgroundColor: 'grey'
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
        marginTop:4,
        marginBottom:4
    }

})
export default AccountScreen;

