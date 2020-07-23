import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screens/HomeScreen';
import SimulationScreen from './src/Screens/SimulationScreen';
import DashboardScreen from './src/Screens/DashboardScreen';
import AccountScreen from './src/Screens/AccountScreen';
import SigninScreen from './src/Screens/SigninScreen';
import SignupScreen from './src/Screens/SignupScreen';
import CreategroupScreen from './src/Screens/CreategroupScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Simulation: SimulationScreen,
    Dashboard: DashboardScreen,
    Account: AccountScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
    Creategroup:CreategroupScreen,
  },
  {
    initialRouteName: 'Signin',
    defaultNavigationOptions: {
      title: 'Home'
    },
  }
);

export default createAppContainer(navigator)