import {createStackNavigator} from 'react-navigation-stack';
import Simulation from '../Screens/SimulationScreen';
import Dashboard from '../Screens/DashboardScreen';
import CreategroupScreen from '../Screens/CreategroupScreen';

const DashboardRouter= createStackNavigator({
    Dashboard,Simulation,CreategroupScreen
},{
    headerMode: 'none'
})

export default DashboardRouter;