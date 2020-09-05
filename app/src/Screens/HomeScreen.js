import React ,{ useState, useEffect,useContext} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView,Modal, FlatList} from 'react-native'
import { Image, Divider,Header,Button} from 'react-native-elements';
import SearchBarComponent from '../Componets/SearchBarComponent'
import useResults from '../Hooks/useResults';
import { Feather, AntDesign } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import avatar from '../../assets/avatar3.png';
import {UserContext} from '../Context/UserContext';
import image from '../../assets/avatar1.png';

const HomeScreen = ({navigation})=>{

    const {term,setTerm} = useState('');
    const {gameId,setgameId} = useState('');
    const {groupId,setgoupId} = useState('');
    const [modalOpen, setModelOpen] = useState(false);
    const userContext = useContext(UserContext);
    const [results,getGroups, games, getGames] = useResults()


    useEffect(() => {
        getGames();
        getGroups();
      },[]);

      const choice=()=>{
        if(results.length < 0){
            return(
                <View style={{height:340}}>
                    <View style={{marginBottom:10,marginTop:10}}>
                        <Text style={{alignSelf:'center',color:'white',fontWeight:'bold',fontSize:13}}>
                            Select a group to play 
                        </Text>
                    </View>
                    <ScrollView>
                        <FlatList 
                        showsHorizontalScrollIndicator={false}
                        data={results}
                        keyExtractor={results=>results.id}
                        renderItem={({item})=>{
                            return( 
                                <TouchableOpacity onPress={()=>{
                                    setgoupId(item.id);
                                    setModelOpen(false);
                                }}>
                                <View style={style.itemStyle2}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={avatar} style={style.avatarStyle2} />
                                        <View  style={style.textStyle2}>
                                            <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>{item.data().groupName}</Text>
                                        </View>
                                    </View>
                                </View>
                                </TouchableOpacity>
                            )
                        }}
                        />
                    </ScrollView>
                </View>
            );
        }
        return(
            <View style={{alignItems:'center', marginTop:50}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:18,marginBottom:30}}>
                    Eish group found ):
                </Text>
                <View>
                    <Text style={{color:'white',fontWeight:'bold',marginBottom:30}}>
                        You need to create a group
                    </Text>
                    <Button  buttonStyle={style.buttonStyle} title='Create Group'
                     titleStyle={{color:'#888e8f',fontWeight:'bolds'}} 
                     onPress={()=>navigation.navigate('Creategroup')}
                     />
                </View>
            </View>
        )
    }
    
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
                          <Image source={userContext.image}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
           
            <View style={style.containerStyle}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                     <Image source={userContext.image}  style={style.profileStyle}/>
                </TouchableOpacity>
            </View>

            <Divider style={{ backgroundColor: '#2A9D8F',height:1 }} />

            <View style={style.containerStyle}>
                <Text style={{fontSize:22,color:'#2A9D8F'}}>Hello,</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>{userContext.username}</Text>
                </TouchableOpacity>
                <Text style={{paddingTop:5,fontSize:16}}>which game would you like to play</Text>
            </View>
            <SearchBarComponent term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
             <Modal visible={modalOpen} animationType='fade' transparent={true}>
                    <View style={style.modalContainer}>
                        <View style={style.modalStyle}>
                            <TouchableOpacity onPress={()=>setModelOpen(false)}>
                                <AntDesign name="closecircleo" size={30} 
                                    color="white" 
                                    style={{alignSelf:'center', paddingTop:10}}
                                 />
                            </TouchableOpacity>
                            {choice()}
                        </View>
                    </View>
                </Modal>
            <ScrollView>
            <FlatList 
             showsHorizontalScrollIndicator={false}
             data={games}
             keyExtractor={result=>result.id}
             renderItem={({item})=>{
                 return( 
                    <TouchableOpacity onPress={()=>{
                        setgameId(item.id);
                        setModelOpen(true);
                    }}>
                       <View style={style.itemStyle}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={image} style={style.avatarStyle} />
                                <View  style={style.textStyle}>
                                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2A9D8F'}}>{item.data().name}</Text>
                                    <Text style={{color:'#f56042'}}>Location :Error</Text>
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
        height:410,
        alignSelf:'center',
        marginTop:'40%',
        backgroundColor:'rgba(42, 157, 143, 1)',
        borderRadius:10
    },
    modalContainer:{
        width:'100%', 
        height:'100%',
        backgroundColor:'rgba(42, 157, 143, 0.4)'
    },
    itemStyle2:{
        backgroundColor:'rgba(245, 247, 246, 0.8)', 
        borderColor:'white',
        borderWidth:1,
        height:50   
    },
    avatarStyle2:{
        width:40,
        height:40, 
        borderRadius:30,
        marginTop:6
    },
    textStyle2:{
        flexDirection:'column',
        marginLeft:10
    },
    buttonStyle:{
        width:150,
        height:50,
        marginBottom:35,
        alignSelf:'center',
        borderRadius:10,
        backgroundColor: 'white',
    }
})
export default HomeScreen;