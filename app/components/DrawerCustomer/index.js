import React, { Component } from 'react';
import { DrawerItems, DrawerView } from 'react-navigation';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet
} from 'react-native';

class DrawerSidebar extends Component {
  render() {
    return (
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
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerSidebar;