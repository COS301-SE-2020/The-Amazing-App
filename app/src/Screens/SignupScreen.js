import React ,{  useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, Button } from 'react-native-elements';
import currentlocation from '../../assets/currentlocation.png'
import ImageComponent from '../Componets/ImageComponent'



const SignupScreen = ({navigation})=>{
    const {containerStyle, inputStyle, buttonStyle} = style;
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    return(
        <View style={containerStyle} >
            <ImageComponent src={currentlocation} />
                <View > 
                    <Input  autoCorrect={false}autoCapitalize='none'
                     containerStyle={inputStyle} placeholder="Username"
                     onChangeText={setUsername} value={Username}/>

                    <Input autoCorrect={false} autoCapitalize='none'
                     containerStyle={inputStyle} placeholder="Email"
                     onChangeText={setEmail} value={email}/>

                    <Input autoCorrect={false} autoCapitalize='none'
                     secureTextEntry containerStyle={inputStyle}  placeholder="Passwod"
                     onChangeText={setPassword} value={password}/>
                     
                     <Button  buttonStyle={buttonStyle} title='Signup' />
                    <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
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
        borderRadius:5,
        backgroundColor: "#2A9D8F"
    }
});
export default SignupScreen;