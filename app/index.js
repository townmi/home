import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import WelcomeScreen from './routers/WelcomeScreen';
import IndexScreen from './routers/IndexScreen';
import UserScreen from './routers/UserScreen';

const Home = DrawerNavigator({
  Index: {
    screen: IndexScreen,
  },
  User: {
    screen: UserScreen,
  },
},
  {
    activeTintColor: '#e91e63',
    style: {
      marginVertical: 0,
    }
  }
);

const App = StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
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