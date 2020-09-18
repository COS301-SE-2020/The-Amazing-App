import React,{useContext} from 'react';
import {Image,View, Text, StyleSheet , ScrollView,Modal} from 'react-native';
import {UserContext} from '../Context/UserContext';
import Spinner from 'react-native-loading-spinner-overlay';
export default SpinnerComponent =(loading,modalLoder)=>(
        <Modal visible={modalLoder} animationType="fade" transparent={true}>
            <View style={style.modalContainer}>
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={loading}
                    //Text with the 
                    textStyle={{color: '#434a47',fontSize:50,fontWeight:'bold'}}
                    textContent={'Loading....'}
                    //Text style of the Spinner Text
                  
                    overlayColor='rgba(42, 157, 143, 0.1)'
                />
            </View>
      </Modal>
);


const style = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(42, 157, 143, 0.4)',
      }
})
