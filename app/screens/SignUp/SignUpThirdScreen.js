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

class SignUpThirdScreen extends Component {
  static navigationOptions = {
    title: 'Informations',
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
      size: '',
      sexe: '',
      weight: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.connect}>Afin d'affiner vos besoins journaliers en nutriments nous avons besoin de quelques informations supplementaires</Text>
          <Input
            leftIcon={{ type: 'entypo', name: 'ruler', color: 'grey' }}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholder="Taille (cm)"
            autoCapitalize="none"
            placeholderTextColor="grey"
            autoCorrect={false}
            keyboardAppearance="light"
            blurOnSubmit
            onChangeText={text => this.setState({ size: text })}
          />
          <Input
            leftIcon={{ type: 'font-awesome', name: 'balance-scale', color: 'grey' }}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholder="Poids (kg)"
            autoCapitalize="none"
            placeholderTextColor="grey"
            autoCorrect={false}
            keyboardAppearance="light"
            blurOnSubmit
            onChangeText={text => this.setState({ weight: text })}
          />
          <Input
            leftIcon={{ type: 'font-awesome', name: 'intersex', color: 'grey' }}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholder="Sexe (h/f)"
            autoCapitalize="none"
            placeholderTextColor="grey"
            autoCorrect={false}
            keyboardAppearance="light"
            blurOnSubmit
            onChangeText={text => this.setState({ sexe: text })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Profile', { size: this.state.size, weigth: this.state.weight, sexe: this.state.sexe })}
          >
            <Text style={styles.title}>Continuer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SignUpThirdScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpThirdScreen;
