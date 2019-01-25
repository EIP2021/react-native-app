

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import colors from '../constants/colors';
import { register } from '../actions/auth-actions';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { getAuth } from '../selectors/auth-selector';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connect: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: RF(3),
    color: 'white',
    marginBottom: hp('1%'),
  },
});

class SignUpSecondScreen extends Component {
  static navigationOptions = {
    title: 'Register',
    headerTitleStyle: {
      fontFamily: 'OpenSans-Bold',
      color: 'white',
      fontWeight: '500',
      fontSize: 24,
      marginTop: 5,
      alignSelf: 'center',
    },
    headerStyle: {
      backgroundColor: colors.theme,
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstPassword: '',
      secondPassword: '',
    };
  }

  register = () => {
    this.props.register(
      this.state.email,
      this.state.firstPassword,
      this.state.secondPassword,
    );
  }

  requestPending = (pending) => {
    if (pending) {
      return (
        <ActivityIndicator
          size="small"
          color="white"
          style={{ marginTop: hp('2%') }}
        />
      );
    }
    return null;
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.connect}>Remplissez les informations</Text>
        <AuthInput
          placeholder="Email"
          icon={{ type: 'material-icons', name: 'mail-outline', color: 'grey' }}
          type="email-address"
          focus
          callback={text => this.setState({ email: text })}
        />
        <AuthInput
          placeholder="Password"
          icon={{ type: 'material-icons', name: 'lock', color: 'grey' }}
          password
          callback={text => this.setState({ firstPassword: text })}
        />
        <AuthInput
          placeholder="Password"
          icon={{ type: 'material-icons', name: 'lock', color: 'grey' }}
          password
          callback={text => this.setState({ secondPassword: text })}
          errorMessage={this.props.auth.errorMessage}
        />
        {this.requestPending(this.props.auth.pending)}
        <AuthButton text="Register" callback={this.register} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
});

const mapDispatchToProps = {
  register,
};

SignUpSecondScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    errorMessage: PropTypes.string.isRequired,
    pending: PropTypes.bool.isRequired,
  }).isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSecondScreen);
