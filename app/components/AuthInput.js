import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderLeftWidth: 0,
    height: hp('7%'),
    width: wp('80%'),
    backgroundColor: 'white',
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: RF(2.5),
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
});

const AuthInput = ({
  placeholder, icon, type, callback, errorMessage, password, focus,
}) => (
  <Input
    leftIcon={icon}
    inputStyle={styles.input}
    inputContainerStyle={styles.inputContainer}
    autoFocus={focus}
    secureTextEntry={password}
    placeholder={placeholder}
    autoCapitalize="none"
    placeholderTextColor="grey"
    autoCorrect={false}
    keyboardAppearance="light"
    keyboardType={type}
    blurOnSubmit
    errorStyle={styles.error}
    errorMessage={errorMessage}
    onChangeText={text => callback(text)}
  />
);

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
  callback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  password: PropTypes.bool,
  focus: PropTypes.bool,
};

AuthInput.defaultProps = {
  type: 'default',
  focus: false,
  errorMessage: '',
  password: false,
};

export default AuthInput;
