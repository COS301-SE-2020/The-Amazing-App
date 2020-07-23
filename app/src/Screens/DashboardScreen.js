import React ,{ useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import FooterComponent from '../Componets/FooterComponent';


const DashboardScreen = ({navigation})=>{
    const {titleStyle, titleContainer, groupStyle} = style;
    const Array =[
        {name: 'Gladiators'},
        {game:'The Detective'}
    ]
    const [temp, setTemp] = useState(0)
   const help = ()=>{
        if(temp === 1)
        {
             return(
                    <View style={groupStyle} >
                    <View style={{paddingRight:10}}>
                    <FontAwesome name="group" size={50} color="#2A9D8F" />
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold', color:'#2A9D8F'}}>{Array[0].name}</Text>
                        <Text >The Detective</Text>
                        <TouchableOpacity onPress={()=>setTemp(0)}>
                            <Text style={{color:'red'}}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
             )
        }
        return null;
   }
    return(
       <>
        <View style={titleContainer} >
            <Text style={titleStyle}>Groups</Text>
            <TouchableOpacity onPress={()=>{
                setTemp(1)
                navigation.navigate('Creategroup')}
            }>
                 <AntDesign name="addusergroup" size={30} color="#2A9D8F" />
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Simulation')}>
            <View style={groupStyle} >
            <View style={{paddingRight:10}}>
            <FontAwesome name="group" size={50} color="#2A9D8F" />
            </View>
            <View>
                <Text style={{fontWeight:'bold', color:'#2A9D8F'}}>NewTech</Text>
                <Text >Treasure Hunt</Text>
                <Text style={{color:'red'}}>Delete</Text>
            </View>
            </View>
        </TouchableOpacity>
        {help()}
   
       
  
            
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
    },
    groupStyle:{
        
        flexDirection: 'row',
        margin:2,
        paddingTop:15
    }


})


export default DashboardScreen;