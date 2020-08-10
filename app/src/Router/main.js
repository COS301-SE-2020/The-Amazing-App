import { createStackNavigator } from './node_modules/react-navigation-stack';
import {createDrawerNavigator} from './node_modules/react-navigation-drawer'
import HomeScreen from '../Screens/HomeScreen';
import AccountScreen from '../Screens/AccountScreen';
import Dashboard from './dashboard';

const main = createDrawerNavigator({
    Home : HomeScreen,
    Dashboard : Dashboard,
    Profile : AccountScreen
});

export default main;