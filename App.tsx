/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Props } from 'react';
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StateComponent } from './components/StateComponent';
import { Home } from './pages/Home';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { Authentication } from './pages/Authentication';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Routes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'ReactNative + Typescript!'
    }
  },
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      title: 'Authenticate'
    }
  }
});

export default class App extends Component {

  constructor(props: any){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Root>
        <Routes />
      </Root>
    );
  }
}
