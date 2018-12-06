import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RootStack from './config/router';

export default class App extends Component {
	render() {
		return <RootStack />;
	}
}