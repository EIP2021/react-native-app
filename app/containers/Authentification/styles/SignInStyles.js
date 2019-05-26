import { StyleSheet } from 'react-native';
import RF from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  connect: {
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: RF(2.5),
    color: '#2ecc71',
  },
  formContainer: {
    flex: 1,
    height: 'auto',
    width: '80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    position: 'absolute',
    borderRadius: 5,
  },
  headerTitleStyle: {
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: '500',
    fontSize: RF(3),
    textAlign: 'center',
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#2ecc71',
  },
  text: {
    color: '#2ecc71',
    fontFamily: 'Roboto',
    fontSize: RF(1.6),
    marginBottom: 5,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
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
    fontStyle: 'normal',
  },
  button: {
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: '#2ecc71',
  },
});

export default styles;
