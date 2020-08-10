import {createStackNavigator} from './node_modules/react-navigation-stack';
import SigninScreen from '../Screens/SigninScreen';
import SignupScreen from '../Screens/SignupScreen';

const auth = createStackNavigator({
    SigninScreen,
    SignupScreen
});

export default auth;