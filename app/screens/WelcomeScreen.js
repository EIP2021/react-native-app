import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  welcome: {
    marginTop: hp('18%'),
    fontFamily: 'OpenSans-Bold',
    fontSize: RF(7),
    color: 'white',
    textAlign: 'center',
  },
  delimiter: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    fontFamily: 'OpenSans-Bold',
    fontSize: RF(3),
    color: 'white',
  },
  bottom: {
    marginTop: hp('29%'),
  },
  title: {
    textAlign: 'center',
    color: colors.theme,
    fontSize: wp('5.5%'),
    fontFamily: 'OpenSans-ExtraBold',
  },
  button: {
    padding: hp('0.8%'),
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('58%'),
    height: hp('7.3%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bar: {
    height: hp('1%'),
    width: wp('40%'),
    backgroundColor: 'white',
  },
});
export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenue sur KiUp</Text>
        <View style={styles.bottom}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('SignIn')}
            >
              <Text style={styles.title}>Se connecter</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.align}>
            <View style={styles.bar} />
            <Text style={styles.delimiter}>ou</Text>
            <View style={styles.bar} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.title}>Créer un compte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
