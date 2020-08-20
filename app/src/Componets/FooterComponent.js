import React ,{  } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Input, Button} from 'react-native-elements'



const FooterComponent = ({navigation})=>{
    return(
       <>
            <View style={style.footerContainer}>
                <Text style={style.footerText}>
                        The Amazing App
                </Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    footerContainer:{
        paddingTop:10,
        paddingBottom:10,
        alignItems: 'center',
        marginTop:150,
        backgroundColor:'rgba(42, 157, 143, 0.4)',

    },
    footerText:{
        fontSize:20,
        fontWeight:'bold',
    }
})


export default FooterComponent;