import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { Alert } from 'react-native';
import NavigationService from '../services/navigation';
import {
  FORGOTTEN_REQUEST,
  REINITIALIZE_REQUEST,
  setPending,
} from '../actions/auth-actions';
import { verifyPassword, verifyEmail } from '../services/authentification';

// TODO delete this once api is set
const delay = ms => new Promise(res => setTimeout(res, ms));

const forgottenRequest = async (email) => {
  const response = await fetch('', {
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Error status: ${response.status}`);
  }
  const json = await response.json();
  return json;
};

const reinitializeRequest = async (password) => {
  const response = await fetch('', {
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      password,
    }),
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Error status: ${response.status}`);
  }
  const json = await response.json();
  return json;
};

export function* forgotten({ email }) {
  try {
    const error = verifyEmail(email);
    if (error) {
      Alert.alert('Erreur', error, [{ text: 'OK' }], { cancelable: false });
      return;
    }
    yield put(setPending(true));
    yield delay(2000);
    // yield call(forgottenRequest, email);
    Alert.alert(
      'Email envoyé',
      'Un email vous a été envoyé afin de réinitialiser votre mot de passe.',
      [
        {
          text: 'OK',
          onPress: () => NavigationService.navigate('SignIn'),
        },
      ],
      { cancelable: false },
    );
  } catch (error) {
    Alert.alert(
      'Erreur',
      'Une Erreur est survenue lors de la réinitialisation de votre mot de passe.',
      [
        {
          text: 'OK',
          onPress: () => NavigationService.navigate('SignIn'),
        },
      ],
      { cancelable: false },
    );
  }
  yield put(setPending(false));
}

export function* reinitialize({ password }) {
  try {
    const error = verifyPassword(password);
    if (error) {
      Alert.alert('Erreur', error, [{ text: 'OK' }], { cancelable: false });
      return;
    }
    yield put(setPending(true));
    yield delay(2000);
    // yield call(reinitializeRequest, password);
    Alert.alert(
      'Mot de passe réinitialiser',
      'Votre mot de passe a été réinitialiser avec succès.',
      [
        {
          text: 'OK',
          onPress: () => NavigationService.navigate('SignIn'),
        },
      ],
      { cancelable: false },
    );
  } catch (error) {
    Alert.alert(
      'Erreur',
      'Une Erreur est survenue lors de la réinitialisation de votre mot de passe.',
      [
        {
          text: 'OK',
          onPress: () => NavigationService.navigate('SignIn'),
        },
      ],
      { cancelable: false },
    );
  }
  yield put(setPending(false));
}

export function* forgottenFlow() {
  yield takeLatest(FORGOTTEN_REQUEST, forgotten);
}

export function* reinitializeFlow() {
  yield takeLatest(REINITIALIZE_REQUEST, forgotten);
}
