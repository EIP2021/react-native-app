/* @flow */

import React, { Component } from 'react';
import KiupInput from './KiupInput';

export default class SecureInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPassword: true,
      icon: 'eye',
    }
  }

  changeTextStatus = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
      icon: (prevState.icon === 'eye') ? 'eye-with-line' : 'eye',
    }));
  }

  render() {
    return (
      <KiupInput
        {...this.props}
        secureTextEntry={this.state.showPassword}
        rightIconContainerStyle={{ marginRight: 10 }}
        rightIcon={{
          type: 'entypo',
          name: this.state.icon,
          color: 'rgba(0,0,0,0.2)',
          onPress: this.changeTextStatus,
        }}
      />
    );
  }
}