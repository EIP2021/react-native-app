import { StyleSheet } from 'react-native';
import RF from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  headerTitleStyle: {
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: '500',
    fontSize: RF(2.5),
    textAlign: 'center',
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#2ecc71',
  },
  inputContainer: {
    borderRadius: 5,
    width: '95%',
    backgroundColor: 'white',
    marginTop: 15,
  },
  inputText: {
    padding: 4,
    fontFamily: 'Roboto',
    fontSize: RF(2),
    color: 'rgba(0,0,0,0.6)',
    fontWeight: '300',
  },
  button: {
    borderRadius: 5,
    marginTop: 20,
    width: '85%',
  },
  input: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
  },
  label: {
    fontFamily: 'Roboto',
    color: 'white',
    paddingLeft: 10,
    fontSize: RF(2.5),
  },
});

export default styles;
