/* @flow */

import React, { Component } from 'react';
import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	View,
} from 'react-native';

export default class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
	}

  componentDidMount = async () => {
		this._checkAuth();
  }

	_checkAuth = () => {
    console.log("checking auth");
    this.props.navigation.navigate('App')
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});