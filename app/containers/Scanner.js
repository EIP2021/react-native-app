import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import TorchIcon from '../components/TorchIcon';
import { scan } from '../actions/scan-actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    if (this.props.pending === false && barcodes && barcodes.length) {
      this.props.scanBarcode(barcodes[0].data);
    }
  }

  render() {
    if (this.props.isFocused) {
      const flashMode = RNCamera.Constants.FlashMode;
      return (
        <View style={styles.container}>
          <RNCamera
            ref={(ref) => { this.camera = ref; }}
            style={styles.preview}
            flashMode={this.state.torch ? flashMode.torch : flashMode.off}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
            onGoogleVisionBarcodesDetected={this.handleBarcode}
          />
          <TorchIcon
            torch={this.state.torch}
            callback={this.turnOnTorch}
          />
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
  scanBarcode: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  pending: state.scan.pending,
});

const mapDispatchToProps = {
  scanBarcode: scan,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(Scanner));
