/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TabScreen from './src/screens/tabScreens'


export default class App extends Component {
  render() {
    return (
      <View style={{flex  : 1 }}>
        <TabScreen />
      </View>
    );
  }
}
