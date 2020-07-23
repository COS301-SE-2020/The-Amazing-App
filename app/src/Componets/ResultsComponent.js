import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultDetail from './ResultDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation}) =>{
    if(!results.length){
        return null;
    }
    const {titleStyle, container} = style;
    return(
        <View style={container}>
            <Text style={titleStyle}>{title}</Text>
            <FlatList 
             horizontal
             showsHorizontalScrollIndicator={false}
             data={results}
             keyExtractor={result=>result.id}
             renderItem={({item})=>{
                 return( 
                     <TouchableOpacity onPress={}>
                         <ResultDetail result={item} />
                     </TouchableOpacity>
                 )
             }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
})

export default withNavigation(ResultsList);




