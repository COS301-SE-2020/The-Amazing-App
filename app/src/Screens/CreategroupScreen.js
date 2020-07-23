import React ,{  } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Input, Button} from 'react-native-elements'



const CreatgroupScreen = ({navigation})=>{
    const {titleStyle, titleContainer, inputStyle, buttonStyle} = style;
    return(
       <>
        <View style={titleContainer} >
            <Text style={titleStyle}>Create Group</Text>
        </View>
        <View style={{paddingTop:20}}>
      
            <Input  autoCorrect={false}autoCapitalize='none'
                containerStyle={inputStyle} placeholder="Group Name"
                />

            <Input autoCorrect={false} autoCapitalize='none'
                containerStyle={inputStyle} placeholder="Group Description"
               />

            <Input autoCorrect={false} autoCapitalize='none'
                containerStyle={inputStyle}  placeholder="Game name"
               />
                
            <Button  buttonStyle={buttonStyle} title='Create' onPress={()=>navigation.navigate('Dashboard')}/>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    titleStyle:{
        fontSize:24,
        fontWeight:'bold',
        alignSelf:'center',
        color:'#2A9D8F',
        paddingTop:25
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        margin:1,
        paddingTop:10,
        paddingBottom:20
    },
    inputStyle:{
        width:'100%',
        height:60,
        alignSelf:'center',
    },
    buttonStyle:{
        width:100,
        height:40,
        marginBottom:35,
        alignSelf:'center',
        borderRadius:5,
        backgroundColor: "#2A9D8F"
    }
})


export default CreatgroupScreen;