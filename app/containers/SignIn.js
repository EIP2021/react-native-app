import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';
import PropTypes from 'prop-types';
import AuthButton from '../components/AuthButton';
import AuthInput from '../components/AuthInput';
import { login } from '../actions/auth-actions';
import colors from '../constants/colors';
import { getAuth } from '../selectors/auth-selector';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: RF(3),
    color: 'white',
    marginBottom: hp('1%'),
  },
});

class SignIn extends Component {
  static navigationOptions = {
    title: 'Connexion',
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
      password: '',
    };
  }

  sendForm = () => {
    this.props.login(this.state.email, this.state.password);
  }

  setEmail = (email) => {
    this.setState({
      email,
    });
  }

  setPassword = (password) => {
    this.setState({
      password,
    });
  }

  loginRequest = (pending) => {
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
        <Text style={styles.title}>Connectez-vous a votre compte KiUp</Text>
        <AuthInput
          placeholder="Email"
          icon={{ type: 'material-icons', name: 'mail-outline', color: 'grey' }}
          type="email-address"
          focus
          callback={this.setEmail}
        />
        <AuthInput
          placeholder="Password"
          icon={{ type: 'material-icons', name: 'lock', color: 'grey' }}
          password
          callback={this.setPassword}
          // errorMessage={this.props.auth.errorMessage}
        />
        {this.loginRequest(this.props.auth.pending)}
        <AuthButton text="Se connecter" callback={this.sendForm} />
      </View>
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isLogged: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
