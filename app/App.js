import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import auth from './src/Router/auth';
import main from './src/Router/main';

const navigator = createSwitchNavigator( {
    auth,
    main
});

export default createAppContainer(navigator)