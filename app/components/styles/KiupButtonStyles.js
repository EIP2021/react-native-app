import { StyleSheet } from 'react-native';
import RF from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    width: 320,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#2ecc71',
    fontFamily: 'Roboto',
    fontSize: RF(2.5),
    paddingBottom: 4,
    fontWeight: '300',
  },
});

export default styles;
