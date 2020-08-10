import React ,{ useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SigninScreen = ({navigation})=>{
    return<TouchableOpacity onPress={()=>navigation.navigate('main')}><Text>SigninScreen</Text></TouchableOpacity>
};
export default SigninScreen;

