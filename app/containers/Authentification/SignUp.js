import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register, setError } from '../../actions/auth-actions';
import { getAuth } from '../../selectors/auth-selector';
import KiupButton from '../../components/KiupButton';
import SecureInput from '../../components/SecureInput';
import KiupInput from '../../components/KiupInput';
import styles from './styles/SignUpStyles';

class SignUpSecondScreen extends Component {
  static navigationOptions = {
    title: 'Inscription',
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

  register = () => {
    this.props.register(
      this.state.email,
      this.state.password,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.connect}>Remplissez les informations</Text>
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
            text="Créer un compte"
            onPress={this.register}
            pending={this.props.auth.pending}
            buttonStyle={styles.button}
            textStyle={{ color: 'white' }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
});

const mapDispatchToProps = {
  register,
  setError,
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
  setError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSecondScreen);
