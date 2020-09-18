import React ,{ useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground , Image} from 'react-native'
import { Input,Text, Button, Header,Icon} from 'react-native-elements';
import { FontAwesome,MaterialIcons, FontAwesome5,SimpleLineIcons,Feather} from '@expo/vector-icons'; 
import {createGroup} from '../Api/GameAPI';
import {UserContext} from '../Context/UserContext';
import {AuthContext} from '../Context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import useResults from '../Hooks/useLocation'

const CreatgroupScreen = ({navigation})=>{
    const [results,getGroups] = useResults();
    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    /**
     * Group details for a game being created 
     */
    const [groupName, setGroupname] =useState('')

    const creater=()=>{
      const  data={
            'groupName' : groupName,
            'userId':authContext.userId,
            'gameId':'',
            'game':'',
            'member':[]
        }
        createGroup(data);
    }


    return(
       <>
           <StatusBar style='#2A9D8F'/>
           <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Create Group', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={userContext.image}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
           <View style={style.overLayer}>
           <View style={style.titleContainer}>
                <Text style={style.titleStyle}>Game Details</Text>
            </View>
            <View style={style.blade} >

            </View>
            <View style={style.detailContainer}>
                <Input containerStyle={style.inputStyle}
                placeholder='Group Name'leftIcon={
                    <FontAwesome name="group" size={24} color="white" />
                    }
                    placeholderTextColor='white'
                 onChangeText={setGroupname} value={groupName}
                />
                
                <Button
                    buttonStyle={style.buttonStyle}
                    title="Create"
                    onPress={async()=>{
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
        backgroundColor:'rgba(42, 157, 143, 0.4)',
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


export default CreatgroupScreen;