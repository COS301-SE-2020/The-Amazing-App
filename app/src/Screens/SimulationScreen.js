import React, {useContext} from 'react'
import { SafeAreaView } from 'react-navigation'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import MapComponent from '../Componets/MapComponent'
import { Header } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'
import {UserContext} from '../Context/UserContext'

const SimulationScreen = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const data = [
    { latitude: -26.2023, longitude: 28.0436 },
    { latitude: -26.21, longitude: 28.0436 },
    { latitude: -26.22, longitude: 28.049 },
  ]
  return (
    <SafeAreaView>
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Simulation',
          style: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
        }}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={userContext.image} style={style.imageStyle} />
          </TouchableOpacity>
        }
        containerStyle={{ backgroundColor:'#2A9D8F'}}
      />
      <MapComponent data={data}/>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
})

export default SimulationScreen
