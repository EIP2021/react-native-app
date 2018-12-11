/* @flow */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AuthLoadingScreen extends Component {
  componentDidMount = async () => {
    this.checkAuth();
  }

  checkAuth = () => {
    this.props.navigation.navigate('App');
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

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AuthLoadingScreen;
