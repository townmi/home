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

import Search from './routers/Search';
import ScanScreen from './routers/ScanScreen';


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
  animationEnabled: false,
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
}) : TabNavigator(options, {
  initialRouteName: 'Index',
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: true,
  order: ['Index', 'List', 'Community', 'User'],
  tabBarOptions: {
    activeTintColor: 'rgba(255, 255, 255, 1)',
    inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      paddingBottom: 0,
      paddingTop: 0,
      backgroundColor: '#19191d',
    },
    indicatorStyle: {
      // backgroundColor: 'red'
      opacity: 0
    }
  }
});


const App = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    },
    Search: {
      screen: Search
    },
    ScanScreen: {
      screen: ScanScreen
    }
  },
  {
    mode: 'card',
    headerMode: 'none'
  }
);

export default App;