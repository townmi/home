import React, { Component } from 'react';
import {
  Dimensions,
  StatusBar,
  ScrollView,
  Text,
  View,
  Platform
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerView, DrawerItems } from 'react-navigation';

// import DrawerSidebar from './components/DrawerCustomer';

import Login from './routers/Login';
import IndexScreen from './routers/IndexScreen';
import UserScreen from './routers/UserScreen';
import ListScreen from './routers/ListScreen';
import CommunityScreen from './routers/CommunityScreen';

alert()

const options = {
  Index: {
    screen: IndexScreen,
  },
  User: {
    screen: UserScreen,
  },
  List: {
    screen: ListScreen,
  },
  Community: {
    screen: CommunityScreen,
  },
};

const Home = Platform.OS === 'ios' ? TabNavigator(options, {
    initialRouteName: 'Index',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    order: ['Index', 'List', 'Community', 'User'],
    tabBarOptions: {
      activeTintColor: 'rgba(255, 255, 255, 1)',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        paddingBottom: 3,
        paddingTop: 3,
        backgroundColor: '#19191d',
      },
    }
  }) : DrawerNavigator(options, {
      initialRouteName: 'Index',
      order: ['Index', 'User'],
      contentOptions: {
        activeTintColor: '#ffffff',
        activeBackgroundColor: 'gray',
        inactiveTintColor: '#ffffff',
        style: {
          marginVertical: 0,
        }
      },
      drawerWidth: Dimensions.get('window').width * 2 / 3,
      style: {
        paddingTop: 0,
      }
    });


const App = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default App;