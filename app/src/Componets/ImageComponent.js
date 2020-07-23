import React ,{  } from 'react';
import {View, Image, StyleSheet} from 'react-native'

const ImageComponent = ({src})=>{
    const {imageStyle} = style;

    return(
        <View>
            <Image style={imageStyle} source={src}/>
        </View>
    )
}

const style = StyleSheet.create({
    imageStyle:{
        width: 350,
        height: 300,
        marginTop:15,
        marginLeft:25,
    }
});

export default ImageComponent;
