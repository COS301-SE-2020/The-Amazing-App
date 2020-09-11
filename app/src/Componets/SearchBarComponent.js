import  React from 'react';
import {TextInput, View,StyleSheet} from 'react-native';
import { FontAwesome} from '@expo/vector-icons';

const SearchBar =({searchTerm})=>{
    const {searchBar, inputStyle, iconStyle} = style;
    return(
        <View style={searchBar}>
            <FontAwesome style={iconStyle} name="search"  />
            <TextInput style={inputStyle} placeholder='Search'
             autoCapitalize='none'
             autoCorrect={false}
             value={searchTerm}
            />
        </View>
    );
}
const style = StyleSheet.create({
    searchBar:{
        backgroundColor:'#E6E6E6',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginTop:1,
        flexDirection: "row",
        marginBottom:10
     },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconStyle:{
        fontSize:30,
        alignSelf:"center",
        marginHorizontal:15
    }
    }
)
export default SearchBar;