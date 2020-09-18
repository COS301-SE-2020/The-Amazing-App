import React ,{ useContext,useEffect } from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground , Image} from 'react-native'
import { Input,Text, Button, Header,Icon} from 'react-native-elements';
import FooterComponent from '../Componets/FooterComponent';
import { FontAwesome,MaterialIcons, FontAwesome5,SimpleLineIcons, Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import {GameContext} from '../Context/GameContext';
import {UserContext} from '../Context/UserContext';
import useInstructions from '../Api/InstructionsAPI';
import gemeDetails from '../Hooks/gemeDetails';

const InstructionScreen = ({navigation})=>{
    const gameContext = useContext(GameContext);
    const userContext = useContext(UserContext);
    const [getDesc,getLocation] = useInstructions();

    useEffect(() => {
        getDesc();
        getLocation();
        
      },[]);

    return(
       <>
           <StatusBar style='#2A9D8F'/>
           <Header
                leftComponent={
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={30} color="#fff" />
                  </TouchableOpacity>}
                centerComponent={{ text: 'Instructions', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={userContext.image}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <View style={style.overLayer}>
           <View style={style.titleContainer}>
                <Text style={style.titleStyle}>{gameContext.gameDesc}</Text>
            </View>
            <View style={style.blade} >

            </View>
            <View style={style.detailContainer}>
            <Text style={style.titleStyle2}>The first location to visit:</Text>
            <Text style={style.titleStyle}>{gameContext.gameLocation}</Text>
            <Text style={style.titleStyle2}>1. Follow the route to reach the marker.</Text>
            <Text style={style.titleStyle2}>2. Answer the question that pops up when you reach the destination.</Text>
                <Button
                    buttonStyle={style.buttonStyle}
                    title="Let's Go!"
                    onPress={()=>{
                        navigation.navigate('Simulation')
                    }
                    }
                />
            </View>
            <FooterComponent/>
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
        fontSize:14,
        color:'white',
    },
    titleStyle2:{
        fontSize:14,
        color:'black',
        padding:15,
    },
    titleContainer:{
        backgroundColor:'rgba(42, 157, 143, 0.7)',
        alignItems:'center',
        marginTop:30,
        padding:15,
        paddingTop:15,
        marginLeft:35,
        marginRight:35,
        borderRadius:5
    },
    detailContainer:{
        backgroundColor:'rgba(42, 157, 143, 0.7)',
        alignItems:'center',
        padding:15,
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
        marginTop:100
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


export default InstructionScreen;