/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
import colors from '../../constants/colors';

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

class SignUpSecondScreen extends Component {
  static navigationOptions = {
    title: 'Mot de passe',
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
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.connect}>Indiquez maintenant un mot de passe</Text>
          <Input
            leftIcon={{ type: 'material-icons', name: 'lock', color: 'grey' }}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholder="Mot de passe"
            autoCapitalize="none"
            placeholderTextColor="grey"
            autoCorrect={false}
            keyboardAppearance="light"
            returnKeyType="done"
            blurOnSubmit
            secureTextEntry
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            leftIcon={{ type: 'material-icons', name: 'lock', color: 'grey' }}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholder="Mot de passe"
            autoCapitalize="none"
            placeholderTextColor="grey"
            autoCorrect={false}
            keyboardAppearance="light"
            returnKeyType="done"
            blurOnSubmit
            secureTextEntry
            onChangeText={text => this.setState({ email: text })}
          />          
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SignUpThird', this.state.email)}
          >
            <Text style={styles.title}>Continuer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SignUpSecondScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpSecondScreen;
