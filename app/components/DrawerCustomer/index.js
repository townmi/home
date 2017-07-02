import React, { Component } from 'react';
import { DrawerItems } from 'react-navigation';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <Text>xxxxxxx</Text>
    <DrawerItems {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent;