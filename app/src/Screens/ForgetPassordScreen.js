import React ,{ useState} from 'react';
import { StyleSheet,Text, TouchableOpacity, SafeAreaView, View} from 'react-native'
import {Input, Button} from 'react-native-elements';
import {forgotPassword} from '../Api/UserAPI'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ForgetPasswordScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    return(
        <>
            <SafeAreaView>
                <View style={style.backgroundStyle}>
                    <View style={style.containerStyle}>
                        <MaterialCommunityIcons name="key-variant"  size={70} style={style.iconStyle} />   
                        <Text style={style.titleStyle} >
                            Yo! Forgot Your Password?
                        </Text>
                        <Text style={style.textStyle}>
                            No worry Enter your email to reset your password 
                        </Text>
                        <Input  autoCorrect={false} autoCapitalize='none'
                        containerStyle={style.inputStyle} placeholder="Email"
                        onChangeText={setEmail} value={email}
                        leftIcon={<MaterialCommunityIcons name="email" size={20} color="white" />}
                        />
                        <Button  buttonStyle={style.buttonStyle} title='Send Request' onPress={()=>forgotPassword(email)} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    backgroundStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(42, 157, 143, 0.7)',
    },
    inputStyle:{
        width:250,
        height:60,
        alignSelf:'center',
   
    },
    buttonStyle:{
        width:150,
        height:40,
        marginBottom:35,
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:"#2A9D8F",
        marginTop:10
    },
    containerStyle:{
        marginTop:200,
        alignSelf:'center'
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:22,
        color:'white',
        alignSelf:'center',
        marginBottom:10
    },
    textStyle:{
        fontWeight:'bold',
        color:'#dfe6e0',
        marginBottom:10
    },
    iconStyle:{
        alignSelf:'center',
        color:'white',
        marginBottom:30
       
    }
})
export default ForgetPasswordScreen;