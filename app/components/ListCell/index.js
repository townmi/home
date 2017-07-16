import React, { Component } from 'react';

import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

import Icon from "../../assets/icons/icons";

export default class ListCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    }
  }
  render() {
    const { list } = this.state;
    return (
      <View style={styles.container}>
        {
          list.length && list.map((cell, index) => {
            return (
              <TouchableHighlight style={styles.btn} onPress={cell.action} underlayColor='#ffffff' key={index}>
                <View style={index === (list.length - 1) ? styles.lastCell : styles.cell}>
                  <Text style={styles.leftIcon}>{Icon(cell.leftIcon)}</Text>
                  <Text style={styles.btnTxt}>{cell.label}</Text>
                  <Text style={styles.rightIcon}>{Icon(cell.rightIcon)}</Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    flexDirection: 'column'
  },
  btn: {
    paddingLeft: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  cell: {
    height: 43,
    overflow: 'hidden',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    backgroundColor: '#ffffff'
  },
  lastCell: {
    height: 42,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  leftIcon: {
    height: 42,
    paddingTop: 13,
    lineHeight: 18,
    fontSize: 18,
    flexGrow: 1,
    color: '#333333',
    fontFamily: 'ionicons',
  },
  rightIcon: {
    height: 42,
    paddingTop: 15,
    lineHeight: 12,
    fontSize: 12,
    flexGrow: 1,
    color: '#333333',
    fontFamily: 'ionicons',
    // backgroundColor: '#ffffff',
  },
  btnTxt: {
    flexGrow: 15,
    height: 42,
    paddingTop: 13,
    lineHeight: 16,
    color: '#333333',
    // backgroundColor: '#ffffff',
    fontSize: 16
  }
})