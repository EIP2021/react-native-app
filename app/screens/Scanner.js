import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  torch: {
    position: 'absolute',
    paddingTop: 5,
    width: 32,
    height: 32,
    bottom: hp('5%'),
    right: wp('5%'),
    borderRadius: 15,
    alignItems: 'center',
  },
  box: {
    position: 'absolute',
    width: wp('90%'),
    height: hp('30%'),
    bottom: hp('35%'),
    right: wp('5%'),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
});

class Scanner extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      torch: false,
      camera: true,
    };
  }

  componentDidMount = async () => {
  }

  turnOnTorch = () => {
    const { torch } = this.state;
    this.setState({
      torch: !torch,
    });
  }

  handleBarcode = ({ barcodes }) => {
    if (barcodes && barcodes.length) {
      this.props.navigation.navigate('Product', {
        barcode: barcodes[0],
      });
    }
  }

  render() {
    if (this.props.isFocused) {
      return (
        <View style={styles.container}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.preview}
            flashMode={this.state.torch ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off}
            type={this.state.camera ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
            permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
            onGoogleVisionBarcodesDetected={this.handleBarcode}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={this.turnOnTorch}
              style={[styles.torch, { backgroundColor: this.state.torch ? 'white' : '#999999' }]}
            >
              <Icon
                name={this.state.torch ? 'md-flash-off' : 'md-flash'}
                type="ionicon"
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.box]} />
        </View>
      );
    }
    return (null);
  }
}

Scanner.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Scanner);
