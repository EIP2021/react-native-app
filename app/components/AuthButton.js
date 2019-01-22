/* @flow weak */

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: hp('4%'),
    padding: hp('0.5%'),
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  title: {
    textAlign: 'center',
    color: colors.theme,
    fontSize: RF(3),
    fontFamily: 'OpenSans-ExtraBold',
  },
});

const AuthButton = ({ text, callback }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => callback()}
  >
    <Text style={styles.title}>{text}</Text>
  </TouchableOpacity>
);

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AuthButton;
