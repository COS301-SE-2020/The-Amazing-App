import React ,{  } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';



const FooterComponent = ({navigation})=>{
    const {statAmountStyle, statContainer, statStyle, statTitleStyle} = style;
    return(
        <View style = {statContainer} >
            <View style={statStyle}>
                <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
                    <Text style = {statTitleStyle}>
                        DashBoard
                    </Text>
                </TouchableOpacity >
            </View>
            <View style={statStyle}>
                <TouchableOpacity onPress={()=>navigation.navigate('Account')}>
                    <Text style = {statTitleStyle}>
                        Account
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={statStyle}>
                <TouchableOpacity >
                    <Text style = {statTitleStyle}>
                        Setting
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    statContainer:{
        flexDirection: 'row',
        marginTop:200,
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
        color:'#2A9D8F',
        fontSize:18,
        fontWeight:'bold',
        marginTop:4
    }
})

export default FooterComponent;