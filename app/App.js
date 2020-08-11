import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import main from './src/Router/MainRouter';
import auth from './src/Router/AuthRouter';
const navigator = createSwitchNavigator( {
    auth,
    main
});

export default createAppContainer(navigator)