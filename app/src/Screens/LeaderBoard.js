import React ,{ useEffect,useContext} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity,FlatList} from 'react-native'
import {Header, Divider} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import {MaterialIcons, FontAwesome, AntDesign} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import {UserContext} from '../Context/UserContext';
import image from '../../assets/avatar1.png';
import useResults from '../Hooks/getPlayers';

const LeaderBoard = ({navigation})=>{
    const { containerStyle, textStyle, statContainer, statAmountStyle, statStyle, statTitleStyle} = style;
    const [players,getPlayers] = useResults();
    const userContext = useContext(UserContext);
    useEffect(() => {
        getPlayers();
      },[]);
    return( 
        <>
            <StatusBar style='#2A9D8F'/>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'LeaderBoard', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                         <Image source={userContext.image}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            
            <ScrollView>
            <FlatList 
             showsHorizontalScrollIndicator={false}
             data={players}
             keyExtractor={(result)=>result.id}
             renderItem={({item})=>{
                    return( 
                        <View style={style.itemStyle}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={image} style={style.avatarStyle} />
                                <View  style={style.textStyle}>
                                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>{item.data().Username}</Text>
                                    <Text style={{color:'#f56042'}}>Points :{item.data().Points}</Text>
                                </View>
                            </View>
                        </View>
                    )
             }}
            />
            </ScrollView>
        </>
    )
}
style = StyleSheet.create({
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
export default LeaderBoard;

