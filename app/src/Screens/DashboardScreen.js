import React ,{  useEffect} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity,FlatList} from 'react-native'
import {Header} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import {getPicture} from '../Api/UserAPI';
import { StatusBar } from 'expo-status-bar';
import image from '../../assets/avatar1.png';
import useResults from '../Hooks/useResults';
import { ScrollView } from 'react-native-gesture-handler';

const DashboardScreen = ({navigation})=>{

    const [results,getGroups] = useResults();

    useEffect(() => {
        getGroups();
      });

    return(
        <>
            <StatusBar style='#2A9D8F'/>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Dashboard', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={getPicture()}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <View style={style.titleContainer}>
                <Text style={style.titleStyle}>Group</Text>
            </View>
            <ScrollView>
            <FlatList 
             showsHorizontalScrollIndicator={false}
             data={results}
             keyExtractor={result=>result.id}
             renderItem={({item})=>{
                 return( 
                    <TouchableOpacity onPress={()=>{navigation.navigate('Simulation')}}>
                    <View style={style.itemStyle}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={image} style={style.avatarStyle} />
                            <View  style={style.textStyle}>
                                <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>{item.data().groupName}</Text>
                                <Text >Game : {item.data().gameName}</Text>
                                <Text style={{color:'#f56042'}}>Location :{item.data().location}</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                 )
             }}
            />
            </ScrollView>
        </>
    )
}
const style = StyleSheet.create({
    titleContainer:{
        backgroundColor:'rgba(42, 157, 143, 0.3)',
        height:50
    },
    titleStyle:{
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:10,
        color:'#2A9D8F'
    },
    imageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#fff',
      
    },
    itemStyle:{
        backgroundColor:'rgba(42, 157, 143, 0.1)', 
        borderColor:'white',
        borderWidth:1,
        height:70   
    },
    avatarStyle:{
        width:50,
        height:50, 
        borderRadius:50,
        marginTop:6
    },
    textStyle:{
        flexDirection:'column',
        marginLeft:10
    }
})
export default DashboardScreen;
