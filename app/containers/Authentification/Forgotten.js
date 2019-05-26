import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { forgotten, setError } from '../../actions/auth-actions';
import { getAuth } from '../../selectors/auth-selector';
import KiupButton from '../../components/KiupButton';
import KiupInput from '../../components/KiupInput';
import styles from './styles/ForgottenStyles';

class Forgotten extends Component {
  static navigationOptions = {
    title: 'Mot de passe oublié',
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

  componentDidMount() {
    this.props.setError('');
  }

  sendForm = () => {
    this.props.forgotten(this.state.email);
  }

  render() {
    return (
      <View style={styles.container}>
        <KiupInput
          label="Entrez l'adresse email de votre compte"
          containerStyle={styles.input}
          labelStyle={styles.label}
          placeholder="Adresse email"
          keyboardType="email-address"
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          onChangeText={text => this.setState({ email: text })}
          autoFocus
        />
        <KiupButton
          text="Continuer"
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

Forgotten.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isLogged: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }).isRequired,
  forgotten: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

const mapDispatchToProps = {
  forgotten,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forgotten);
