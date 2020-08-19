import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Feather, AntDesign, MaterialIcons} from '@expo/vector-icons';
import Dashboard from '../Router/SimulationRouter';
import Home from '../Screens/HomeScreen';
import Profile from '../Screens/AccountScreen';
import Settings from '../Screens/SettingsScreen';
import Logout from '../Screens/LogoutScreen';
import Sidebar from '../Componets/SideBarComponent';
import { Dimensions } from 'react-native';

const MainRouter = createDrawerNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Home',
            drawerIcon:({tintColor})=><AntDesign name='home' size={20} color={tintColor} />,
        }
    },
    Dashboard:{
        screen:Dashboard,
        navigationOptions:{
            title:'Dashboard',
            drawerIcon:({tintColor})=><MaterialIcons name='dashboard' size={20} color={tintColor} />,
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            title:'Profile',
            drawerIcon:({tintColor})=><Feather name='user' size={20} color={tintColor} />,
        }
    },
    Settings:{
        screen:Settings,
        navigationOptions:{
            title:'Settings',
            drawerIcon:({tintColor})=><AntDesign name='setting' size={20} color={tintColor} />,
        }
    },
    Logout:{
        screen:Logout,
        navigationOptions:{
            title:'Logout',
            drawerIcon:({tintColor})=><Feather name='log-out' size={20} color={tintColor} />,
        }
    }
},
{
    contentComponent:props=><Sidebar {...props}/>,

    drawerWidth: Dimensions.get('window').width*0.7,
    hideStatusBar: true,

    contentOptions:{
        activeBackgroundColor:'rgba(42, 157, 143, 0.2)',
        activeTintColor: '#2a9d8f',
        itermsContainerStyle:{
            marginTop : 16,
            marginHorizontal:8
        }
    }
})

export default MainRouter;