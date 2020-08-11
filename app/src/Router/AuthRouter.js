import SigninScreen from '../Screens/SigninScreen';
import SignupScreen from '../Screens/SignupScreen';
import {createStackNavigator} from 'react-navigation-stack';


const AuthRouter= createStackNavigator({
    SigninScreen
    ,SignupScreen
},{
    headerMode: 'none'
})

export default AuthRouter;
