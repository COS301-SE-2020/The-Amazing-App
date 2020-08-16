import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import main from './src/Router/MainRouter';
import auth from './src/Router/AuthRouter';
import landingScreen from './src/Screens/LandingScreen';
const navigator = createSwitchNavigator( {
    landingScreen,
    auth,
    main
});

export default createAppContainer(navigator)