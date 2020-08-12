import { createStackNavigator } from './node_modules/react-navigation-stack';
import SimulationScreen from '../Screens/SimulationScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import CreategroupScreen from '../Screens/CreategroupScreen';

const dashboard = createStackNavigator({
    DashboardScreen,
    SimulationScreen,
    c
});

export default dashboard;