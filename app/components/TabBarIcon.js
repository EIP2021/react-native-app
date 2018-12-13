import {
  Icon,
} from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

export default class TabBarIcon extends React.components {
  render() {
    return (
      <Icon
        name={this.props.name}
        type={this.props.type}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? colors.tabIconSelected : colors.tabIconDefault}
      />
    );
  }
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};
