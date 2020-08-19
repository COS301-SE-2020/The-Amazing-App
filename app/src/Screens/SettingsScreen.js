import React ,{ useState} from 'react';
import { StyleSheet,Image, TouchableOpacity, View, Text, Modal, Alert} from 'react-native'
import {Header, Divider, Input, Button} from 'react-native-elements';
import { Feather, AntDesign,MaterialCommunityIcons, MaterialIcons,EvilIcons, Entypo } from '@expo/vector-icons'; 
import { Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import {updateUsername, updatePassword,updatePicture,getPicture} from '../Api/UserAPI';



const SettingsScreen = ({navigation})=>{
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const [modalOpen, setModelOpen] = useState(false);
    const [isOperation, setisOperation] = useState('');
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    /*
            This state varible are used for changing 
            user preference 
    */
    const [username, setUsername] = useState('');
    const [newPassword, setnewPassword] = useState('');
    const [oldPassword, setoldPassword] = useState('');
    const [url, setUrl] = useState('');

     /*
        Uploading the picture method 
    */
   const onChooseImagePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        updatePicture(result.uri);
        setModelOpen(false);
    }

    const operation=()=>{
        switch(isOperation){
            case 'username':return(
                <View>
                    <Text style={style.operationStyle}>
                        Change username
                    </Text>
                    <Divider style={style.dividerStyle} />

                      <Input 
                        placeholderTextColor="white"
                        containerStyle={{marginTop:'10%'}}
                        style={{textContentType:'white'}}
                        autoCorrect={false} autoCapitalize='none' placeholder="Enter new username"
                        onChangeText={setUsername} value={username}
                        leftIcon={<EvilIcons name="lock" size={32} color="white"/>}
                     />
                    <Button  buttonStyle={style.buttonStyle} title='Submit' onPress={()=>{
                        updateUsername(username)
                        setModelOpen(false)
                    }}
                     />
                    <Divider style={style.dividerStyle} />
                </View>
            )
        case 'password':return(
            <View>
                <Text style={style.operationStyle}>
                    Change password
                </Text>
                <Divider style={style.dividerStyle} />

                  <Input 
                    secureTextEntry
                    placeholderTextColor="white"
                    textContentType={{color:'white'}}
                    containerStyle={{marginTop:'5%'}}
                    autoCorrect={false} autoCapitalize='none' placeholder="Enter old password"
                    onChangeText={setoldPassword} value={oldPassword}
                    leftIcon={<EvilIcons name="lock" size={32} color="white"/>}

                 />

                <Input 
                    secureTextEntry
                    placeholderTextColor="white"
                    textContentType={{color:'white'}}
                    autoCorrect={false} autoCapitalize='none' placeholder="Enter new password"
                    onChangeText={setnewPassword} value={newPassword}
                    leftIcon={<EvilIcons name="lock" size={32} color="white"/>}
                 />
                <Button  buttonStyle={style.buttonStyle} title='Submit' onPress={()=>{
                        updatePassword(newPassword,oldPassword)
                        setModelOpen(false)
                    }}
                 />
                <Divider style={style.dividerStyle} />
            </View>
        )

      case 'profile':return(
            <View>
                <Text style={style.operationStyle}>
                    Change Profile Picture
                </Text>
                <Divider style={style.dividerStyle} />
                <Entypo name="image" size={80} color="white" style={{alignSelf:'center'
                  ,marginBottom:15,marginTop:20  
                }} />
                <Button  buttonStyle={style.buttonStyle} title='Upload'
                onPress={()=>{onChooseImagePress()}}
                 />
                <Divider style={style.dividerStyle} />
            </View>
        )
      }
    }
    

    return(
        <>
            <StatusBar style='#2A9D8F'/>
            <Header
                leftComponent={
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='#fff'/>
                </TouchableOpacity>}
                centerComponent={{ text: 'Settings', style: { color: '#fff',fontSize:22, fontWeight:'bold' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={getPicture()}  style={style.imageStyle}/>
                    </TouchableOpacity>
                }
                containerStyle={{backgroundColor:'#2A9D8F'}}
            />
            <View style={style.containerStyle}>
                <View style={style.headStyle}/>
                <Modal visible={modalOpen} animationType='fade' transparent={true}>
                    <View style={style.modalContainer}>
                        <View style={style.modalStyle}>
                            <TouchableOpacity onPress={()=>setModelOpen(false)}>
                                <AntDesign name="closecircleo" size={30} 
                                    color="white" 
                                    style={{alignSelf:'center', paddingTop:10}}
                                 />
                            </TouchableOpacity>
                            {operation()}
                        </View>
                    </View>
                </Modal>

                <View style={style.detailStyle}>
                <TouchableOpacity onPress={()=>{
                    setisOperation('username')
                    setModelOpen(true)
                }}>
                     <View style={{flexDirection:'row', marginTop:15}}>
                        <AntDesign name="user" size={30} color="#2A9D8F" />
                        <Text style={style.textStyle}>Change username</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={35} color="#2A9D8F" style={{marginLeft:'48%'}} />
                    </View>
                </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
                    <TouchableOpacity  onPress={()=>{
                    setisOperation('password')
                    setModelOpen(true)
                }}>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <AntDesign name="lock" size={30} color="#2A9D8F" />
                            <Text style={style.textStyle}>Change password</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={35} color="#2A9D8F" style={{marginLeft:'47%'}} />
                        </View>
                    </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
                    <TouchableOpacity  onPress={()=>{
                    setisOperation('profile')
                    setModelOpen(true)
                }}>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <AntDesign name="picture" size={30} color="#2A9D8F" />
                            <Text style={style.textStyle}>Change profile picture</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={35} color="#2A9D8F" style={{marginLeft:'39%'}} />
                        </View>
                    </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
                </View>
                <View style={style.detailStyle}>
                    <View style={{flexDirection:'row', marginTop:15}}>
                          <MaterialCommunityIcons name="theme-light-dark" size={30} color="#2A9D8F" />
                          <Text style={style.textStyle}>Change theme</Text>
                          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{marginLeft:'38%'}} />
                    </View>
                    <Divider style={style.dividerStyle2} />
                    <TouchableOpacity>
                    <View style={{flexDirection:'row', marginTop:15}}>
                          <AntDesign name="delete" size={28} color="#f54922" />
                          <Text style={{fontSize:15,marginTop:5,fontWeight:'bold',color:'#f54922',paddingLeft:5}}>Delete Account</Text>
                          <MaterialIcons name="keyboard-arrow-right" size={35} color="#f54922" style={{marginLeft:'52%'}} />
                    </View>
                    </TouchableOpacity>
                    <Divider style={style.dividerStyle2} />
                </View>
            </View>
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
    containerStyle:{
        backgroundColor:'#d4d9d5',
        width:'100%',
        height:'100%',
    },
    headStyle:{
        backgroundColor:'white',
        width:'100%',
        height:'10%',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'rgba(42, 157, 143, 0.4)'
    },
    detailStyle:{
        backgroundColor:'white',
        width:'100%',
        height:'26%',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'rgba(42, 157, 143, 0.4)',
        marginTop:30,

    },
    textStyle:{
        fontSize:15,
        marginTop:5,
        fontWeight:'bold',
        color:'#2A9D8F',
        paddingLeft:5
    },
    dividerStyle:{
        backgroundColor: 'white',
        height:1 , 
        marginTop:10,
    },
    dividerStyle2:{
        backgroundColor: 'rgba(42, 157, 143, 0.24)',
        height:1 , 
        marginTop:10,
        width:'94%',
        alignSelf:'flex-end',
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
    },
    operationStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        paddingTop:5,
        paddingBottom:5
    },
    buttonStyle:{
        width:100,
        height:40,
        marginBottom:35,
        alignSelf:'center',
        borderRadius:10,
        backgroundColor: "rgba(255,250,250, 0.4)"
    }
    
})
export default SettingsScreen;
