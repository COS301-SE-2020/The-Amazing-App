import {createStackNavigator} from 'react-navigation-stack';
import Dashboard from '../Router/DashboardRouter';
import Simulation from '../Screens/SimulationScreen';
import Instructions from '../Screens/InstructionScreen'

const SimulationRouter = createStackNavigator( {
    Dashboard,
    Instructions,
    Simulation,
},{
    headerMode: 'none'
});
export default SimulationRouter;