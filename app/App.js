import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import React from 'react';
import main from './src/Router/MainRouter';
import auth from './src/Router/AuthRouter';
import landingScreen from './src/Screens/LandingScreen';
import {AuthProvider} from './src/Context/AuthContext';
import {UserProvider} from './src/Context/UserContext';
import test from './src/Screens/test';

console.disableYellowBox = true; 
const navigator = createSwitchNavigator( {
    //test,
    landingScreen,
    auth,
    main
});

const AppContainer= createAppContainer(navigator);

const App = () =>{
    return (
      <AuthProvider>
        <UserProvider>
          <AppContainer />
        </UserProvider>
      </AuthProvider>
    );
  }
  export default App;


