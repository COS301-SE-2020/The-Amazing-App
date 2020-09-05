import React, {useState, useEffect} from 'react';
import { View,Text,TouchableOpacity} from 'react-native'
import useLocation from '../Hooks/useLocation';
import * as Location from 'expo-location';
const test = ({navigation})=>{

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    });
    
    const [locat, getCoordinates] = useLocation();
    return(
        <> 
            <View style={{alignItems:'center',paddingTop:80}}>
                <TouchableOpacity onPress={()=>getCoordinates()}>
                    <Text style={{backgroundColor:'green', fontSize:18}}>Testingdddddss</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

export default test;