/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Stack from './src/helper/navigation/Stack';

//Redux management
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './src/reducers/index';




type Props = {};
export default class App extends Component<Props> {
  store = createStore(AppReducer, applyMiddleware(thunk));
  render() {
    return (
        <Provider store={this.store}>
          <Stack/>
        </Provider>
    );
  }
}

