import React from 'react';
import { ViewPropTypes, Text } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles/KiupInputStyles';

const KiupInput = ({ inputStyle, inputContainerStyle, ...props }) => (
  <Input
    {...props}
    inputStyle={[styles.input, inputStyle]}
    inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
    autoCapitalize="none"
    placeholderTextColor="rgba(0,0,0,0.4)"
    autoCorrect={false}
    keyboardAppearance="light"
    blurOnSubmit
    errorStyle={styles.error}
  />
);

KiupInput.propTypes = {
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: Text.propTypes.style,
};

KiupInput.defaultProps = {
  inputContainerStyle: {},
  inputStyle: {},
};

export default KiupInput;
