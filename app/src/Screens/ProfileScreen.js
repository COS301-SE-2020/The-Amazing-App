import React ,{  } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import src from '../../assets/t3.jpg'
import src2 from '../../assets/prof.svg'
import { Image, Divider} from 'react-native-elements';
import FooterComponet from '../Componets/FooterComponent';


const AccountScreen = ()=>{
    const {imageStyle, containerStyle, textStyle, statContainer, statAmountStyle, statStyle, statTitleStyle} = style;

    return(
        <>
            <View style={containerStyle}>
                 <Image source={src}  style={imageStyle}/>
            </View>

            <Divider style={{ backgroundColor: '#2A9D8F',height:1 , padingBottom:20}} />
            <View style={{paddingBottom:15}}>
                
                <Text style={textStyle}>Name : Rayna Vetrovs</Text>
                <Text style={textStyle}>Username : Rayna-Vetrovs</Text>
                <Text style={textStyle}>Email : NewTech@gmail.co.za</Text>
            </View>
            <View style={statContainer}>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>0</Text>
                    <Text style={statTitleStyle}>Games Enrolled</Text>
                </View>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>0</Text>
                    <Text style={statTitleStyle}>Games Completed</Text>
                </View>
                <View style={statStyle}>
                    <Text style={statAmountStyle}>0</Text>
                    <Text style={statTitleStyle}>Groups</Text>
                </View>
            </View>
            <FooterComponet />
        </>
        
    )
}

const style = StyleSheet.create({
    imageStyle:{
        width:200,
        height:200,
        marginTop:15,
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
        margin:2,
        paddingTop:15
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
        marginTop:4
    }


})
export default AccountScreen;