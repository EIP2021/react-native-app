/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import RF from 'react-native-responsive-fontsize';
import styles from './styles/KiupButtonStyles';

const KiupButton = ({
  text, pending, onPress, buttonStyle, textStyle, loadingColor,
}) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    <View style={styles.container}>
      {!pending && <Text style={[styles.text, textStyle]}>{text}</Text>}
      {pending && <ActivityIndicator size="small" color={loadingColor} />}
    </View>
  </TouchableOpacity>
);

KiupButton.propTypes = {
  text: PropTypes.string,
  pending: PropTypes.bool,
  onPress: PropTypes.func,
  buttonStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  loadingColor: PropTypes.string,
};

KiupButton.defaultProps = {
  text: '',
  pending: false,
  onPress: /* istanbull ignore next */() => {},
  buttonStyle: {},
  textStyle: {},
  loadingColor: 'white',
};

export default KiupButton;
