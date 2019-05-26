import { StyleSheet } from 'react-native';
import RF from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  welcome: {
    marginTop: '18%',
    fontFamily: 'OpenSans-Bold',
    fontSize: RF(6),
    color: 'white',
    textAlign: 'center',
  },
  delimiter: {
    fontFamily: 'Roboto',
    fontSize: RF(3),
    color: 'white',
    paddingBottom: 5,
  },
  bottom: {
    marginTop: '70%',
  },
  align: {
    marginTop: 20,
    marginBottom: 20,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bar: {
    height: 6,
    width: '42%',
    backgroundColor: 'white',
  },
});

export default styles;
