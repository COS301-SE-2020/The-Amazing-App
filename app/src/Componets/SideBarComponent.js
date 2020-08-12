import React from 'react';
import {Image,View, Text, StyleSheet , ScrollView} from 'react-native';
import sc from '../../assets/t1.jpg';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

export default SideBarComponent =(props)=>{
    return(
        <ScrollView>
            <View style={{ width : undefined,padding : 16,paddingTop : 48,backgroundColor: '#2A9D8F',}}>
                <Image source={sc} style={style.profileStyle} />
                <Text style={style.nameStyle}>Premodial Zou</Text>
            </View>
            <View style={style.container}>
                <DrawerNavigatorItems {...props} />
            </View>
            <View style={style.logoStyle}>
                <Text style={style.titleStyle}>
                    The Amazing App
                </Text>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    profileStyle:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:3,
        borderColor:'#fff',
        alignSelf: 'center',
        
    },
    nameStyle:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:8,
        alignSelf: 'center',
    },
    logoStyle:{
        marginTop:310,
        paddingTop:10,
        paddingBottom:10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor:'rgba(42, 157, 143, 0.4)',
    },
    titleStyle:{
        fontSize:20,
        fontWeight:'bold',
    }
})