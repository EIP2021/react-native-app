import React from 'react';
import {
  Icon,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

export const ScannerTabBarIcon = ({ focused }) => (
  <Icon
    name="md-qr-scanner"
    type="ionicon"
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? colors.tabIconSelected : colors.tabIconDefault}
  />
);

ScannerTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export const ProfilTabBarIcon = ({ focused }) => (
  <Icon
    name="md-person"
    type="ionicon"
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? colors.tabIconSelected : colors.tabIconDefault}
  />
);

ProfilTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};
