import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth-actions';

class Placeholder extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerRight: (
      <Button
        onPress={() => {
          const logout = navigation.getParam('logout');
          logout();
          navigation.navigate('Welcome');
        }}
        title="Sign out"
        color="red"
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      logout: this.props.logout,
    });
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout: authActions.logout,
};

Placeholder.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Placeholder);
