
// React
import React, { Props } from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { StoreState } from './constants';
import reducers from './reducers';
import { authReducer } from './reducers/authReducer';

// React Navigator
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';

// Containers
import Authentication from './containers/Authentication';
import { Home } from './pages/Home';
import { AnyAction } from 'redux';

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

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default class App extends Component {

  constructor(props: any){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <Routes />
        </Root>
      </Provider>
    );
  }
}
