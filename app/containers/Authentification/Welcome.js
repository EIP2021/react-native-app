import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import KiupButton from '../../components/KiupButton';
import styles from './styles/WelcomeStyles';

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenue sur Kiup</Text>
        <View style={styles.bottom}>
          <KiupButton
            text="Se connecter"
            onPress={() => this.props.navigation.navigate('SignIn')}
          />
          <View style={styles.align}>
            <View style={styles.bar} />
            <Text style={styles.delimiter}>ou</Text>
            <View style={styles.bar} />
          </View>
          <KiupButton
            text="Créer un compte"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </View>
    );
  }
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Welcome;
