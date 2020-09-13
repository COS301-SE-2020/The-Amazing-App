import React ,{ useState, useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input,Button } from 'react-native-elements';
import currentlocation from '../../assets/currentlocation.png';
import ImageComponent from '../Componets/ImageComponent';
import { StatusBar } from 'expo-status-bar';
import { EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import {AuthContext} from '../Context/AuthContext';
import {UserContext} from '../Context/UserContext';
import useLogin from '../Api/LoginAPI';

const SigninScreen = ({navigation})=>{
    const {containerStyle, inputStyle, buttonStyle} = style;
    const [password, setPassword] = useState('');
    const [Login] = useLogin();
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);

    <StatusBar style='#2A9D8F'/>
    return(
        <View style={containerStyle} >
            <ImageComponent src={currentlocation} />
            <View>
                    <Input  autoCorrect={false} autoCapitalize='none'
                     containerStyle={inputStyle} placeholder="Email"
                      onChangeText={userContext.setEmail} value={userContext.email}
                      leftIcon={<MaterialCommunityIcons name="email" size={20} color="#2A9D8F" />}
                      />

                    <Input containerStyle={inputStyle} secureTextEntry
                     autoCorrect={false} autoCapitalize='none' placeholder="Password"
                     onChangeText={setPassword} value={password}
                     leftIcon={<EvilIcons name="lock" size={32} color="#2A9D8F" />}
                     />

                <TouchableOpacity onPress={()=>navigation.navigate('ForgetPasswordScreen')}>
                    <Text style={{alignSelf:'center',marginBottom:10,color:'#2A9D8F'}}>
                        Forgot  Password 
                    </Text>
                </TouchableOpacity>

                <Button  buttonStyle={buttonStyle} title='Sign In' onPress={()=>Login(userContext.email,password)} />
                {authContext.isLoggedin?navigation.navigate('Home'):null}
                <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
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
        borderRadius:10,
        backgroundColor: "#2A9D8F"
    }
});

export default SigninScreen;

