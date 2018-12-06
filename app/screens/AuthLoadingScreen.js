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
		this._checkAuth();
	}

	_checkAuth = () => {
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