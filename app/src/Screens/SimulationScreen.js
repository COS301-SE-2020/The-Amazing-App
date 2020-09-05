import React ,{ useContext} from 'react';
import {SafeAreaView} from 'react-navigation';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import MapComponent from '../Componets/MapComponent';
import  {Header} from 'react-native-elements';
import {UserContext} from '../Context/UserContext';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialIcons } from '@expo/vector-icons'; 
import * as Location from 'expo-location';
const SimulationScreen = ({navigation})=>{

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      },[]);
      

    const userContext = useContext(UserContext);
    return(
        <SafeAreaView>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                    <MaterialIcons name="arrow-back" size={30} color="#fff" />
                </TouchableOpacity>}
                centerComponent={{ text: 'Simulation', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={userContext.image}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <MapComponent />
        </SafeAreaView>
    )
}

const style  = StyleSheet.create({
    imageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#fff',

    }
})

export default SimulationScreen;