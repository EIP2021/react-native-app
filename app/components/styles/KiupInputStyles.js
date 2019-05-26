import { StyleSheet } from 'react-native';
import RF from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    alignContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: '80%',
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: RF(1.5),
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
});

export default styles;
