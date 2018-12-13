/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  Input,
} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth-actions';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    justifyContent: 'center',
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
  connect: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: RF(3),
    color: 'white',
    marginBottom: hp('1%'),
  },
  form: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
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

class SignInScreen extends Component {
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

  componentDidUpdate(prevProps) {
    if (this.props.auth !== prevProps.auth) {
      if (this.props.auth.isLogged) {
        this.props.navigation.navigate('Profile');
      }
    }
  }

  showActivityBar = () => {
    if (this.props.auth.pending) {
      return (
        <ActivityIndicator />
      );
    }
    return undefined;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.connect}>Connectez-vous a votre compte KiUp</Text>
          <Input
            leftIcon={{ type: 'material-icons', name: 'mail-outline', color: 'grey' }}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            autoFocus
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="grey"
            autoCorrect={false}
            keyboardAppearance="light"
            keyboardType="email-address"
            returnKeyType="next"
            blurOnSubmit={false}
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            leftIcon={{ type: 'material-icons', name: 'lock', color: 'grey' }}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="grey"
            autoCorrect={false}
            keyboardAppearance="light"
            returnKeyType="done"
            blurOnSubmit
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />
          {this.showActivityBar()}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.login(this.state.email, this.state.password);
            }}
          >
            <Text style={styles.title}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isLogged: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  login: authActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
