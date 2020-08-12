import React ,{ useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import { Image, Divider,Header } from 'react-native-elements';
import SearchBarComponent from '../Componets/SearchBarComponent'
import useResults from '../Hooks/userResults';
import { Feather } from '@expo/vector-icons'; 
import sc from '../../assets/t1.jpg';
import { StatusBar } from 'expo-status-bar';
import User from '../Api/UserAPI'

const HomeScreen = ({navigation})=>{
    const [searchApi, results, errorMessage] = useResults();
    const {term,setTerm} = useState('');
    const email = navigation.getParam('email');

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
                        <Image source={sc}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <View style={style.containerStyle}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Image source={sc}  style={style.profileStyle}/>
                </TouchableOpacity>
            </View>

            <Divider style={{ backgroundColor: '#2A9D8F',height:1 }} />

            <View style={style.containerStyle}>
                <Text style={{fontSize:22,color:'#2A9D8F'}}>Hello,</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>{User(email)}</Text>
                </TouchableOpacity>
                <Text style={{paddingTop:10,fontSize:16}}>which game would you like to play</Text>
            </View>
            <SearchBarComponent term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
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
        marginTop:15,
        borderRadius:100,
        marginBottom:10
    },
    containerStyle:
    {
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
    },
})
export default HomeScreen;