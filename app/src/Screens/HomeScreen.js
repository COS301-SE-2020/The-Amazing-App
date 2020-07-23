import React ,{useState  } from 'react';
import FooterComponent from '../Componets/FooterComponent';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import src from '../../assets/t3.jpg'
import { Image, Divider,Header } from 'react-native-elements';
import SearchBarComponent from '../Componets/SearchBarComponent'
import HeaderComponet from '../Componets/HeaderComponent';
import useResults from '../Hooks/userResults';

const HomeScreen = ({navigation})=>{
    const {imageStyle, containerStyle} = style;
    const [searchApi, results, errorMessage] = useResults();
    const {term,setTerm} = useState('');

    return(
        <>
            <View style={containerStyle}>
                <TouchableOpacity onPress={()=>navigation.navigate('Account')}>
                    <Image source={src}  style={imageStyle}/>
                </TouchableOpacity>
            </View>

            <Divider style={{ backgroundColor: '#2A9D8F',height:1 }} />

            <View style={containerStyle}>
                <Text style={{fontSize:22,color:'#2A9D8F'}}>Hello,</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Account')}>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>Rayna Vetrovs</Text>
                </TouchableOpacity>
                <Text style={{paddingTop:10,fontSize:16}}>which game would you like to play</Text>
            </View>
            <SearchBarComponent term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <FooterComponent navigation={navigation} />
           
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


})

export default HomeScreen;