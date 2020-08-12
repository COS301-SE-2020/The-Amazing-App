import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import Dashboard from '../Screens/DashboardScreen';
import Creategroup from '../Screens/CreategroupScreen';
import JoingroupScreen from '../Screens/JoingroupScreen';
import {MaterialIcons, FontAwesome, AntDesign} from '@expo/vector-icons'

const DashboardRouter= createBottomTabNavigator({
    Dashboard:{
        screen:Dashboard,
        navigationOptions:{
            title:'Dashbaord',
            tabBarIcon:({tintColor})=><MaterialIcons name='dashboard' size={20} color={'#2A9D8F'}/>,
        },
    },
    Creategroup:{
        screen:Creategroup,
        navigationOptions:{
            title:'Create group',
            tabBarIcon:({tintColor})=><FontAwesome name='group' size={20} color={'#2A9D8F'}/>,
        }
    },
    JoingroupScreen:{
        screen:JoingroupScreen,
        navigationOptions:{
            title:'Join Group',
            tabBarIcon:({tintColor})=><AntDesign name="addusergroup" size={24} color='#2A9D8F' />,
        }
    }
},{
    tabBarOptions:{
        activeTintColor:'#2A9D8F',
        labelStyle: {
            fontSize: 14
          },
        style:{
            backgroundColor:'rgba(42, 157, 143, 0.3)'
        }
    }
})

export default DashboardRouter;

