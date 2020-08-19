import {createStackNavigator} from 'react-navigation-stack';
import Dashboard from '../Router/DashboardRouter';
import Simulation from '../Screens/SimulationScreen';

const SimulationRouter = createStackNavigator( {
    Dashboard,
    Simulation
});

export default SimulationRouter;