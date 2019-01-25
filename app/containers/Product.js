import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { addNutriments } from '../actions/stat-actions';
import { scanDone } from '../actions/scan-actions';
import {
  getProductName,
  getProductNutriments,
  // getProductPicture,
} from '../selectors/scan-selector';
import NutrimentsList from '../components/NutrimentsList';
import NutrimentsChart from '../components/NutrimentsChart';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginBottom: hp('5%'),
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#2ecc71',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  list: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('2%'),
    maxHeight: hp('30%'),
  },
});

class Product extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <NutrimentsChart nutriments={this.props.nutriments} />
        <Text style={styles.title}>{this.props.productName}</Text>
        <View style={styles.list}>
          <NutrimentsList nutriments={this.props.nutriments} />
          <Button
            title="Ajouter"
            buttonStyle={styles.button}
            onPress={() => {
              this.props.addNutriments(this.props.nutriments);
              this.props.navigation.goBack();
              // this.props.scanDone();
            }}
          />
        </View>
      </View>
    );
  }
}

Product.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
  nutriments: PropTypes.shape({}).isRequired,
  productName: PropTypes.string.isRequired,
  // productPicture: PropTypes.string.isRequired,
  addNutriments: PropTypes.func.isRequired,
  // scanDone: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nutriments: getProductNutriments(state),
  productName: getProductName(state),
  // productPicture: getProductPicture(state),
});

const mapDispatchToProps = {
  addNutriments,
  scanDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
