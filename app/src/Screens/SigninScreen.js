import React ,{ useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input,Button } from 'react-native-elements';
import currentlocation from '../../assets/currentlocation.png'
import ImageComponent from '../Componets/ImageComponent'


const SigninScreen = ({navigation})=>{
    const {containerStyle, inputStyle, buttonStyle} = style;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={containerStyle} >
            <ImageComponent src={currentlocation} />
            <View>
                    <Input  autoCorrect={false} autoCapitalize='none'
                     containerStyle={inputStyle} placeholder="Email"
                      onChangeText={setEmail} value={email}/>

                    <Input containerStyle={inputStyle} secureTextEntry
                     autoCorrect={false} autoCapitalize='none' placeholder="Passwod"
                     onChangeText={setPassword} value={password}/>

                <TouchableOpacity>
                    <Text style={{alignSelf:'center',marginBottom:10}}>
                        Forgot <Text style={{color:'#2A9D8F'}}> Password
                    </Text></Text>
                </TouchableOpacity>

                <Button  buttonStyle={buttonStyle} title='Signin' />
                
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{alignSelf:'center'}}>
                        Dont have an account ? <Text style={{color:'#2A9D8F'}}> Signup
                    </Text></Text>
                </TouchableOpacity>
            </View>
         
 
       
        </View> 
    )
};
 
const style = StyleSheet.create({
    containerStyle:{
        backgroundColor:'#FFFFFF',
        flex:1
    },
    inputStyle:{
        width:250,
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
});

export default SigninScreen;

