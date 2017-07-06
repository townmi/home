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

alert()

const options = {
  Index: {
    screen: IndexScreen,
  },
  User: {
    screen: UserScreen,
  },
};

const Home = Platform.OS === 'ios' ? TabNavigator(options, {
    initialRouteName: 'Index',
    order: ['Index', 'User'],
    contentOptions: {
      activeTintColor: '#ffffff',
      activeBackgroundColor: 'gray',
      inactiveTintColor: '#ffffff',
      style: {
        marginVertical: 0,
      }
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
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default App;