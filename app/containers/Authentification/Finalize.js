import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Picker from 'react-native-picker';
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

  showTimePicker = () => {
  //   let years = [];
  //   let months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  //   let days = [];
  //   for (let i = 1; i < 51; i += 1) {
  //     years.push(i + 1980);
  //   }
  //   for (let i = 1; i < 32; i += 1) {
  //     days.push(i);
  //   }
  //   let pickerData = [months, days, years];
  //   let date = new Date();
  //   let selectedValue = [
  //     date.getMonth()+1,
  //     date.getDate(),
  //     date.getFullYear(),
  //   ];
  //   Picker.init({
  //      pickerData,
  //      selectedValue,
  //      pickerTitleText: 'Select Date and Time',
  //      wheelFlex: [1, 1, 1],
  //      onPickerConfirm: pickedValue => {
  //          console.log('area', pickedValue);
  //      },
  //      onPickerCancel: pickedValue => {
  //          console.log('area', pickedValue);
  //      },
  //      pickerRowHeight: 30,
  //      isLoop: true,
  //      onPickerSelect: pickedValue => {
  //          let targetValue = [...pickedValue];
  //          if(parseInt(targetValue[1]) === 2){
  //              if(targetValue[0]%4 === 0 && targetValue[2] > 29){
  //                  targetValue[2] = 29;
  //              }
  //              else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
  //                  targetValue[2] = 28;
  //              }
  //          }
  //          else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
  //              targetValue[2] = 30;
  //
  //          }
  //          // forbidden some value such as some 2.29, 4.31, 6.31...
  //          if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
  //              // android will return String all the time，but we put Number into picker at first
  //              // so we need to convert them to Number again
  //              targetValue.map((v, k) => {
  //                  if(k !== 3){
  //                      targetValue[k] = parseInt(v);
  //                  }
  //              });
  //              Picker.select(targetValue);
  //              pickedValue = targetValue;
  //          }
  //      }
  //   });
  //    Picker.show();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.connect}>Connectez-vous à votre compte</Text>
          <KiupInput
            keyboardType="numeric"
            placeholder="Poids (kg)"
          />
          <KiupButton
            text="Se connecter"
            onPress={this.showTimePicker}
            pending={this.props.auth.pending}
            buttonStyle={styles.button}
            textStyle={{ color: 'white' }}
          />
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