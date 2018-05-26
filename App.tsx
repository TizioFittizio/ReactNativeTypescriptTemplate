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
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import { Root } from 'native-base';
import { Authentication } from './pages/Authentication';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props: any){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Root>
        <Home/>
      </Root>
    );
  }
}
