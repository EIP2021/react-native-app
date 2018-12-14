/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PieChart } from 'react-native-svg-charts';
import { Button, ListItem } from 'react-native-elements';
// import { Text as TextSvg } from 'react-native-svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as statActions from '../actions/stat-actions';

const getMilligramValue = (val, unit) => {
  const units = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'];
  if (val === '' || val === ' ' || val === undefined || val === null) {
    return (0);
  }
  if (unit === '' || unit === ' ' || unit === undefined || unit === null) {
    return (0);
  }
  let result = parseFloat(val).toFixed(3);
  const div = units.indexOf(unit);
  if (div === -1) {
    return (0);
  }
  result *= 10 ** div;
  return (result);
};

const styles = StyleSheet.create({
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
  listItem: {
    width: wp('80%'),
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

// const Labels = ({ slices }) => slices.map((slice) => {
//   const { pieCentroid, data } = slice;
//   return (
//     <TextSvg
//       key={data.key}
//       x={pieCentroid[0]}
//       y={pieCentroid[1]}
//       fill="white"
//       textAnchor="middle"
//       alignmentBaseline="middle"
//       fontSize={12}
//       stroke="black"
//       strokeWidth={0.2}
//     >
//       {data.value}
//     </TextSvg>
//   );
// });

const toDec = (val) => {
  if (val === '' || val === ' ' || val === undefined || val === null) {
    return (0);
  }
  const num = parseFloat(val);
  if (isNaN(num)) {
    return (0);
  }
  if (num > 10) {
    return num.toFixed(1).toString();
  }
  return num.toFixed(3).toString();
};

const toFloat = (val) => {
  if (val === '' || val === ' ' || val === undefined || val === null) {
    return (0);
  }
  const num = parseFloat(val);
  if (isNaN(num)) {
    return (0);
  }
  return parseFloat((num.toFixed(3)));
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: false,
    };
  }

  componentDidMount = async () => {
    const url = `https://fr.openfoodfacts.org/api/v0/produit/${this.props.navigation.state.params.barcode.data}.json`;
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        this.setState({
          error: true,
        });
      }
      const response = await res.json();
      if (response.status === 0) {
        this.setState({
          error: true,
        });
        return;
      }
      const nm = response.product.nutriments;
      console.log(nm);
      const nutriments = {
        sodium_value: nm.salt_serving && nm.salt_serving !== '' ? nm.salt_serving : nm.salt_value,
        sodium_unit: nm.salt_unit !== '' ? nm.salt_unit : 'g',
        potassium_value: nm.potassium_serving && nm.potassium_serving !== '' ? nm.potassium_serving : nm.potassium_value,
        potassium_unit: nm.potassium_unit !== '' ? nm.potassium_unit : 'g',
        proteins_value: nm.proteins_serving && nm.proteins_serving !== '' ? nm.proteins_serving : nm.proteins_value,
        proteins_unit: nm.proteins_unit !== '' ? nm.proteins_unit : 'g',
        calcium_value: nm.calcium_serving && nm.calcium_serving !== '' ? nm.calcium_serving : nm.calcium_value,
        calcium_unit: nm.calcium_unit !== '' ? nm.calcium_unit : 'g',
      };
      let chartData = [{
        value: getMilligramValue(nutriments.potassium_value, nutriments.potassium_unit),
        key: 'potassium',
        svg: {
          fill: '#EFCA08',
        },
      }, {
        value: getMilligramValue(nutriments.proteins_value, nutriments.proteins_unit),
        key: 'proteins',
        svg: {
          fill: '#69A2B0',
        },
      }, {
        value: getMilligramValue(nutriments.calcium_value, nutriments.calcium_unit),
        key: 'calcium',
        svg: {
          fill: '#D9594C',
        },
      }, {
        value: getMilligramValue(nutriments.sodium_value, nutriments.sodium_unit),
        key: 'sodium',
        svg: {
          fill: '#2ecc71',
        },
      }];
      chartData = chartData.filter(obj => obj.value > 0);
      console.log(chartData);
      this.setState({
        loading: false,
        data: {
          chartData,
          nutriments,
          product: response.product,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.loading}>
          <Text>There was an error loading your product :(</Text>
        </View>
      );
    }
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    const list = [{
      title: 'Potassium', icon: 'info-with-circle', color: '#EFCA08', rightTitle: `${toDec(this.state.data.nutriments.potassium_value)} ${this.state.data.nutriments.potassium_unit || 'mg'}`,
    }, {
      title: 'Calcium', icon: 'info-with-circle', color: '#D9594C', rightTitle: `${toDec(this.state.data.nutriments.calcium_value)} ${this.state.data.nutriments.calcium_unit || 'mg'}`,
    }, {
      title: 'Sodium', icon: 'info-with-circle', color: '#2ecc71', rightTitle: `${toDec(this.state.data.nutriments.sodium_value)} ${this.state.data.nutriments.sodium_unit || 'mg'}`,
    }, {
      title: 'Proteines', icon: 'info-with-circle', color: '#69A2B0', rightTitle: `${toDec(this.state.data.nutriments.proteins_value)} ${this.state.data.nutriments.proteins_unit || 'mg'}`,
    }];
    return (
      <View style={styles.container}>
        <PieChart
          style={{ height: hp('30%'), marginTop: hp('3%'), alignSelf: 'stretch' }}
          padAngle={0}
          outerRadius="70%"
          data={this.state.data.chartData}
        />
        {/* <Labels />
        </PieChart> */}
        <Text style={styles.title}>{this.state.data.product.generic_name}</Text>
        <View style={styles.list}>
          {list.map(item => <ListItem key={item.title} title={item.title} rightTitle={item.rightTitle} leftIcon={{ name: item.icon, type: 'entypo', color: item.color }} style={styles.listItem} />)}
          <Button
            title="Ajouter"
            buttonStyle={styles.button}
            onPress={() => {
              this.props.addProduct({
                potassium: toFloat(this.state.data.nutriments.potassium_value),
                sel: toFloat(this.state.data.nutriments.sodium_value),
                proteine: toFloat(this.state.data.nutriments.proteins_value),
                phosphore: toFloat(this.state.data.nutriments.calcium_value),
              });
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
    state: PropTypes.object.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addProduct: statActions.addProduct,
};


export default connect(null, mapDispatchToProps)(Product);
