import React, { Component } from 'react';
import {
  Dimensions,
  StatusBar,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerView } from 'react-navigation';

import DrawerCustomer from './components/DrawerCustomer';

import Login from './routers/Login';
import IndexScreen from './routers/IndexScreen';
import UserScreen from './routers/UserScreen';

const SideDrawer = (props) => (
  <View>
    <StatusBar
      backgroundColor={'gray'}
      barStyle="light-content"
    />
    <View>
      <Text>xxxxx</Text>
      <Text>{123}</Text>
      <Text>{456}</Text>
    </View>
    <DrawerView.Items {...this.props} />
  </View>
);

const options = {
  initialRouteName: 'Index',
  order: ['Index', 'User'],
  contentComponent: props => (<View>
      <StatusBar
        backgroundColor={'gray'}
        barStyle="light-content"
      />
      <View>
        <Text>xxxxx</Text>
        <Text>{123}</Text>
        <Text>{456}</Text>
      </View>
      <DrawerView.Items {...this.props} />
    </View>)
  ,
  contentOptions: {
    activeTintColor: '#ffffff',
    activeBackgroundColor: 'gray',
    inactiveTintColor: '#ffffff',
    style: {
      marginVertical: 0,
    }
  },
  drawerWidth: Dimensions.get('window').width - 119,
  style: {
    paddingTop: 0,
  },
};

const Home = DrawerNavigator({
  Index: {
    screen: IndexScreen,
  },
  User: {
    screen: UserScreen,
  },
}, options);


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