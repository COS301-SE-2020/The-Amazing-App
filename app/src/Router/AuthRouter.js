import SigninScreen from '../Screens/SigninScreen';
import SignupScreen from '../Screens/SignupScreen';
import {createStackNavigator} from 'react-navigation-stack';
import ForgetPasswordScreen  from '../Screens/ForgetPassordScreen';

const AuthRouter= createStackNavigator({
    SigninScreen,
    SignupScreen,
    ForgetPasswordScreen
},{
    headerMode: 'none'
})

export default AuthRouter;
