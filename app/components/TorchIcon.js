/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  torch: {
    position: 'absolute',
    paddingTop: 5,
    width: 32,
    height: 32,
    bottom: hp('5%'),
    right: wp('5%'),
    borderRadius: 15,
    alignItems: 'center',
  },
});

const TorchIcon = ({ torch, callback }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={callback}
      style={[styles.torch, { backgroundColor: torch ? '#999999' : 'white' }]}
    >
      <Icon
        name={torch ? 'md-flash-off' : 'md-flash'}
        type="ionicon"
        color="black"
      />
    </TouchableOpacity>
  </View>
);

TorchIcon.propTypes = {
  torch: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default TorchIcon;
