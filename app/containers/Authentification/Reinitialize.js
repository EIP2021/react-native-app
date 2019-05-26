import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth-actions';
import { getAuth } from '../../selectors/auth-selector';
import KiupButton from '../../components/KiupButton';
import SecureInput from '../../components/SecureInput';
import styles from './styles/ReinitializeStyles';

class Reinitialize extends Component {
  static navigationOptions = {
    title: 'Réinitialisation',
    headerTintColor: 'white',
    headerRight: (<View />),
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: styles.headerStyle,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  sendForm = () => {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <SecureInput
          label="Entrez un nouveau mot de passe"
          containerStyle={styles.input}
          labelStyle={styles.label}
          placeholder="Mot de passe"
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          onChangeText={text => this.setState({ email: text })}
          autoFocus
        />
        <KiupButton
          text="Réinitialiser"
          onPress={this.sendForm}
          pending={this.props.auth.pending}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          loadingColor="#2ecc71"
        />
      </View>
    );
  }
}

Reinitialize.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Reinitialize);
