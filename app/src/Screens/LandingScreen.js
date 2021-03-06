import React, { useContext, useEffect} from 'react'
import { StyleSheet,View, TouchableOpacity, SafeAreaView, ImageBackground, Text} from 'react-native'
import sc from '../../assets/back3.jpg';
import { UserContext } from '../Context/UserContext'
import * as Location from 'expo-location'
const LandingScreen = ({navigation})=>{

    const userContext = useContext(UserContext);
    useEffect(() => {
        ;(async () => {
          try {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied')
            }
            let location = await Location.getCurrentPositionAsync({})
            const loc = {'latitude':location.coords.latitude,'longitude':location.coords.longitude}
            userContext.setUserLocation(loc)
          } catch (error) {
            let status = Location.getProviderStatusAsync();
            if(!(await status).locationServicesEnabled){
              alert('')
            }
          }
        })()
      }, [])
    return(
        <>
            <SafeAreaView>
              <ImageBackground source={sc}  style={{width:'100%', height:'100%',alignSelf:'center'}}>
                <Text style={style.titleStyle}>The Amazing App</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('auth')}>
                        <View style={style.buttonStyle}>
                            <Text style={style.textStyle}>
                                Let's GO .....
                            </Text>
                        </View>
                    </TouchableOpacity>
              </ImageBackground>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    titleStyle:{
        fontSize:45,
        marginTop:250,
        borderRadius:5,
        width:'100%',
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        backgroundColor:'rgba(42, 157, 143, 0.4)',
    },
    buttonStyle:{
        width:150,
        height:45,
        alignSelf:'center',
        marginTop:300,
        backgroundColor:'rgba(42, 157, 143, 0.4)',
        borderRadius:10
    },
    textStyle:{
        fontSize:22,
        color:'white',
        fontWeight:'bold',
        marginTop:5,
        paddingLeft:5
    }
   
})
export default LandingScreen;
