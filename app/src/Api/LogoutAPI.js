import React ,{useContext} from 'react';
import {Alert} from 'react-native';
import firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';
import {UserContext} from '../Context/UserContext';
import source from '../../assets/t1.jpg';
export default () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const Logout = () =>{
      try {
        authContext.setisLoggedIn(false);
        authContext.setUserId('');
        userContext.setUsername('');
        userContext.setEmail('');
        userContext.setImage(null);
        userContext.setPoints(0);
        userContext.setNumGames(0);
        userContext.setNumGroups(0);
      } catch (error) {
        Alert.alert('Unable to logout');
      }      

  }
  return [Logout]
}

