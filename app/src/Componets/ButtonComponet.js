import React ,{  } from 'react';
import {View, StyleSheet} from 'react-native';
import { } from 'react-native-elements';


const ButtonComponent = ({title})=>{
  
    const {buttonStyle} = style;
    return(
        <View style={buttonStyle}>
            <Button  title={title}/>
        </View>
    );
}
const style = StyleSheet.create({
   
})

export default ButtonComponent;

