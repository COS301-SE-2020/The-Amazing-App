import React ,{  useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, Button } from 'react-native-elements';
import currentlocation from '../../assets/currentlocation.png'
import ImageComponent from '../Componets/ImageComponent';
import { EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import RegisterApi from '../Api/RegisterAPI';

const SignupScreen = ({navigation})=>{
    const {containerStyle, inputStyle, buttonStyle} = style;
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isRegistered, Register] = RegisterApi();

    return(
        <View style={containerStyle} >
            <ImageComponent src={currentlocation} />
                <View > 
                    <Input  autoCorrect={false}autoCapitalize='none'
                     containerStyle={inputStyle} placeholder="Username"
                     onChangeText={setUsername} value={Username}
                     leftIcon={<EvilIcons name="user" size={24} color="#2A9D8F" />}
                     />

                    <Input autoCorrect={false} autoCapitalize='none'
                     containerStyle={inputStyle} placeholder="Email"
                     onChangeText={setEmail} value={email}
                     leftIcon={<MaterialCommunityIcons name="email" size={20} color="#2A9D8F" />}
                     />

                    <Input autoCorrect={false} autoCapitalize='none'
                     secureTextEntry containerStyle={inputStyle}  placeholder="Passwod"
                     onChangeText={setPassword} value={password}
                     leftIcon={<EvilIcons name="lock" size={32} color="#2A9D8F" />}
                     />
                     
                     <Button  buttonStyle={buttonStyle} title='Signup' onPress={()=>{
                                Register(email,password,Username)
                     }}/>
                     {isRegistered?navigation.navigate('Home',{email:email}):null}
                    <TouchableOpacity onPress={()=>navigation.navigate('SigninScreen')}>
                        <Text style={{alignSelf:'center'}}>
                            Already have an account ? <Text style={{color:'#2A9D8F'}}> Signin
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
        borderRadius:10,
        backgroundColor: "#2A9D8F"
    }
});
export default SignupScreen;
