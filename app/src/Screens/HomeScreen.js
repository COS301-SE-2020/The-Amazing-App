import React ,{ useState, useEffect} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView, FlatList} from 'react-native'
import { Image, Divider,Header } from 'react-native-elements';
import SearchBarComponent from '../Componets/SearchBarComponent'
import useResults from '../Hooks/useResults';
import { Feather, AntDesign } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import {User,getPicture} from '../Api/UserAPI'
import image from '../../assets/avatar.png'

const HomeScreen = ({navigation})=>{
    const {term,setTerm} = useState('');
    const email = navigation.getParam('email');

    const [results, getGroups, games, getGames] = useResults()


    useEffect(() => {
        getGames();
      });

    return(
        <>
            <StatusBar style='#2A9D8F'/>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Home', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={getPicture()}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <View style={style.containerStyle}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Image source={getPicture()}  style={style.profileStyle}/>
                </TouchableOpacity>
            </View>

            <Divider style={{ backgroundColor: '#2A9D8F',height:1 }} />

            <View style={style.containerStyle}>
                <Text style={{fontSize:22,color:'#2A9D8F'}}>Hello,</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>{User(email)}</Text>
                </TouchableOpacity>
                <Text style={{paddingTop:5,fontSize:16}}>which game would you like to play</Text>
            </View>
            <SearchBarComponent term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
            <FlatList 
             showsHorizontalScrollIndicator={false}
             data={games}
             keyExtractor={result=>result.id}
             renderItem={({item})=>{
                 return( 
                  
                        <View style={style.itemStyle}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={image} style={style.avatarStyle} />
                                <View  style={style.textStyle}>
                                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>{item.data().name}</Text>
                                    <Text style={{color:'#f56042'}}>Location :Pretoria</Text>
                                </View>
                             </View>
                        </View>
                 )
             }}
            />
                    <View style={style.itemStyle}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={image} style={style.avatarStyle} />
                                <View  style={style.textStyle}>
                                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>The amaizing Race</Text>
                                    <Text style={{color:'#f56042'}}>Location :Pretoria</Text>
                                </View>
                             </View>
                        </View>

                        <View style={style.itemStyle}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={image} style={style.avatarStyle} />
                                <View  style={style.textStyle}>
                                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>Treasure Hunt</Text>
                                    <Text style={{color:'#f56042'}}>Location :Pretoria</Text>
                                </View>
                             </View>
                        </View>
                        <View style={style.itemStyle}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={image} style={style.avatarStyle} />
                                <View  style={style.textStyle}>
                                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>The Dective</Text>
                                    <Text style={{color:'#f56042'}}>Location :Pretoria</Text>
                                </View>
                             </View>
                        </View>
                        <View style={style.itemStyle}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={image} style={style.avatarStyle} />
                                <View  style={style.textStyle}>
                                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>The Amaizing App</Text>
                                    <Text style={{color:'#f56042'}}>Location :Pretoria</Text>
                                </View>
                             </View>
                        </View>

            </ScrollView>
        </>
    )
}
const style = StyleSheet.create({
    imageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#fff',

    },
    profileStyle:{
        width:150,
        height:150,
        marginTop:5,
        borderRadius:100,
        marginBottom:5
    },
    containerStyle:
    {
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
    },
    itemStyle:{
        backgroundColor:'rgba(245, 247, 246, 0.8)', 
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
        marginLeft:10,
        
    },
    modalStyle:{
        width:'70%', 
        height:380,
        alignSelf:'center',
        marginTop:'40%',
        backgroundColor:'rgba(42, 157, 143, 1)',
        borderRadius:10
    },
    modalContainer:{
        width:'100%', 
        height:'100%',
        backgroundColor:'rgba(42, 157, 143, 0.4)'
    }
})
export default HomeScreen;