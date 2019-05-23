import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.theme,
    alignItems: 'center',
    flex: 1,
  },
  textButton: {
    flex: 1,
    textAlign: 'center',
    color: colors.theme,
    fontSize: wp('5.5%'),
    fontFamily: 'OpenSans-ExtraBold',
  },
  validateText: {
    flex: 1,
    marginLeft: wp('2%'),
    color: colors.theme,
    fontSize: wp('3%'),
    fontFamily: 'OpenSans-ExtraBold',
  },
  button: {
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    padding: hp('1.5%'),
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('80%'),
    height: hp('8%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  validateButton: {
    marginBottom: hp('2%'),
    backgroundColor: 'white',
    width: wp('20%'),
    height: hp('3%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'white',
    width: wp('70%'),
    height: hp('7%'),
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: hp('1%'),
    fontFamily: 'OpenSans-ExtraBold',
  },
  inputDate: {
    backgroundColor: 'white',
    borderColor: 'white',
    width: wp('70%'),
    height: hp('7%'),
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: hp('1%'),
  },
});

class ModifyProfile extends Component {
  static navigationOptions = () => ({
    title: 'Mes informations',
  });

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Password',
      height: '',
      weight: '',
      birthDate: '',
    };
  }

  componentDidMount() {
    // TODO : request API to the server for user information and set it in state
  }

  expand = (buttonID) => {
    this.setState({
      activeItem: buttonID,
    });
  }

  modify = (modifyID) => {
    // TODO : request API to the server to save user information
  }

  render() {
    const {
      activeItem, height, weight, birthDate,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.button}
          name="Password"
          onPress={() => this.expand('Password')}
        >
          <View style={styles.rowContainer}>
            <Icon name="lock" size={30} color={colors.theme} />
            <Text style={styles.textButton}>Mot de passe</Text>
          </View>
        </TouchableOpacity>
        { activeItem === 'Password'
          ? (
            <View>
              <TextInput
                style={styles.input}
                type="text"
                placeholder="Ancien mot de passe"
                onChangeText={oldPassword => this.setState({ oldPassword })}
              />
              <TextInput
                style={styles.input}
                type="text"
                placeholder="Nouveau mot de passe"
                onChangeText={newPassword => this.setState({ newPassword })}
              />
              <TextInput
                style={styles.input}
                type="text"
                placeholder="Confirmer le mot de passe"
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
              />
              <TouchableOpacity
                style={styles.validateButton}
                onPress={() => this.modify('Password')}
              >
                <View style={styles.rowContainer}>
                  <Icon name="check" size={15} color={colors.theme} />
                  <Text style={styles.validateText}>Valider</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null
        }
        <TouchableOpacity
          style={styles.button}
          name="Height"
          onPress={() => this.expand('Height')}
        >
          <View style={styles.rowContainer}>
            <Icon name="ruler-vertical" size={30} color={colors.theme} />
            <Text style={styles.textButton}> Taille</Text>
          </View>
        </TouchableOpacity>
        { activeItem === 'Height'
          ? (
            <View>
              <TextInput
                style={styles.input}
                type="text"
                placeholder="taille en cm"
                value={height}
                onChangeText={heightI => this.setState({ height: heightI })}
              />
              <TouchableOpacity
                style={styles.validateButton}
                onPress={() => this.modify('Height')}
              >
                <View style={styles.rowContainer}>
                  <Icon name="check" size={15} color={colors.theme} />
                  <Text style={styles.validateText}>Valider</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null
        }
        <TouchableOpacity
          style={styles.button}
          name="Weight"
          onPress={() => this.expand('Weight')}
        >
          <View style={styles.rowContainer}>
            <Icon name="weight-hanging" size={30} color={colors.theme} />
            <Text style={styles.textButton}> Poids</Text>
          </View>
        </TouchableOpacity>
        { activeItem === 'Weight'
          ? (
            <View>
              <TextInput
                style={styles.input}
                type="text"
                placeholder="poids en kg"
                value={weight}
                onChangeText={weightI => this.setState({ weight: weightI })}
              />
              <TouchableOpacity
                style={styles.validateButton}
                onPress={() => this.modify('Weight')}
              >
                <View style={styles.rowContainer}>
                  <Icon name="check" size={15} color={colors.theme} />
                  <Text style={styles.validateText}>Valider</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null
        }
        <TouchableOpacity
          style={styles.button}
          name="BirthDate"
          onPress={() => this.expand('BirthDate')}
        >
          <View style={styles.rowContainer}>
            <Icon name="birthday-cake" size={30} color={colors.theme} />
            <Text style={styles.textButton}> Date de naissance</Text>
          </View>
        </TouchableOpacity>
        { activeItem === 'BirthDate'
          ? (
            <View>
              <DatePicker
                style={styles.inputDate}
                date={birthDate}
                mode="date"
                placeholder={birthDate}
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(birthDateI) => { this.setState({ birthDate: birthDateI }); }}
                customStyles={{
                  dateText: {
                    fontFamily: 'OpenSans-ExtraBold',
                  },
                  dateInput: {
                    borderColor: 'white',
                  },
                }}
              />
              <TouchableOpacity
                style={styles.validateButton}
                onPress={() => this.modify('birthDate')}
              >
                <View style={styles.rowContainer}>
                  <Icon name="check" size={15} color={colors.theme} />
                  <Text style={styles.validateText}>Valider</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null
        }
      </View>
    );
  }
}

export default ModifyProfile;
