import React, { Component } from 'react';

import {
  View,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import Icon from "../../assets/icons/icons";

export default class ViewCell extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableHighlight style={styles.box}>
        <View>
          <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2017/06/12/20/41/drop-of-water-2396748_960_720.jpg' }} />
          <Text>1312</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get('window').width * 9 / 10,
    marginLeft: Dimensions.get('window').width * 1 / 20,
    borderRadius: 4,
  },
  image: {
    width: Dimensions.get('window').width * 9 / 10,
    height: Dimensions.get('window').width * 4 / 9
  }
});