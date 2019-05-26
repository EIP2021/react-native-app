import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { login, setError } from '../../actions/auth-actions';
import { getAuth } from '../../selectors/auth-selector';
import SecureInput from '../../components/SecureInput';
import KiupButton from '../../components/KiupButton';
import KiupInput from '../../components/KiupInput';
import styles from './styles/SignInStyles';

class SignIn extends Component {
  static navigationOptions = {
    title: 'Connexion',
    headerTintColor: 'white',
    headerRight: (<View />),
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: styles.headerStyle,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.setError('');
  }

  sendForm = () => {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.connect}>Connectez-vous à votre compte</Text>
          <KiupInput
            placeholder="Adresse email"
            keyboardType="email-address"
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            onChangeText={text => this.setState({ email: text })}
            autoFocus
          />
          <SecureInput
            placeholder="Mot de passe"
            onChangeText={text => this.setState({ password: text })}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            errorMessage={this.props.auth.errorMessage}
          />
          <KiupButton
            text="Se connecter"
            onPress={this.sendForm}
            pending={this.props.auth.pending}
            buttonStyle={styles.button}
            textStyle={{ color: 'white' }}
          />
          <Text
            style={styles.text}
            onPress={() => this.props.navigation.navigate('Forgotten')}
          >
            Mot de passe oublié ?
          </Text>
          <Text
            style={[styles.text, { marginBottom: 10 }]}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            Pas encore inscrit ?
          </Text>
        </View>
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
  setError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

const mapDispatchToProps = {
  login,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
