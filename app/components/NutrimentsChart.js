import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { PieChart } from 'react-native-svg-charts';
import { getPercentage } from '../utils/calculations/profileCalc';
import colors from '../constants/colors';
import maxNutriments from '../constants/nutriments-max';

const styles = StyleSheet.create({
  chart: {
    height: hp('30%'),
    alignSelf: 'stretch',
  },
});

const NutrimentsChart = ({ nutriments }) => {
  let nutrimentsChart = [{
    value: getPercentage(nutriments.potassium, maxNutriments.potassium),
    key: 'potassium',
    svg: {
      fill: colors.nutriments.potassium,
    },
  }, {
    value: getPercentage(nutriments.proteins, maxNutriments.proteins),
    key: 'proteins',
    svg: {
      fill: colors.nutriments.proteins,
    },
  }, {
    value: getPercentage(nutriments.phosphorus, maxNutriments.phosphorus),
    key: 'phosphore',
    svg: {
      fill: colors.nutriments.phosphorus,
    },
  }, {
    value: getPercentage(nutriments.sodium, maxNutriments.sodium),
    key: 'sodium',
    svg: {
      fill: colors.nutriments.sodium,
    },
  }];
  nutrimentsChart = nutrimentsChart.filter(obj => obj.value > 0);

  return (
    <PieChart
      style={styles.chart}
      padAngle={0}
      outerRadius="70%"
      data={nutrimentsChart}
    />
  );
};

NutrimentsChart.propTypes = {
  nutriments: PropTypes.shape({
    potassium: PropTypes.number.isRequired,
    phosphorus: PropTypes.number.isRequired,
    sodium: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
  }).isRequired,
};

export default NutrimentsChart;
