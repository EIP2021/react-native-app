import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import colors from '../constants/colors';
import nutrimentsConst from '../constants/nutriments';

const styles = StyleSheet.create({
  listItem: {
    width: wp('80%'),
  },
});

const NutrimentsList = ({ nutriments }) => {
  const list = [
    {
      title: 'Potassium',
      color: colors.nutriments.potassium,
      rightTitle: `${nutriments.potassium} ${nutrimentsConst.potassium.unit}`,
    }, {
      title: 'Phosphore',
      color: colors.nutriments.phosphorus,
      rightTitle: `${nutriments.phosphorus} ${nutrimentsConst.phosphorus.unit}`,
    }, {
      title: 'Sodium',
      color: colors.nutriments.sodium,
      rightTitle: `${nutriments.sodium} ${nutrimentsConst.sodium.unit}`,
    }, {
      title: 'Proteines',
      color: colors.nutriments.proteins,
      rightTitle: `${nutriments.proteins} ${nutrimentsConst.proteins.unit}`,
    },
  ];

  return (
    <>
      {list.map(item => (
        <ListItem
          key={item.title}
          title={item.title}
          rightTitle={item.rightTitle}
          leftIcon={{ name: 'info-with-circle', type: 'entypo', color: item.color }}
          style={styles.listItem}
        />
      ))}
    </>
  );
};

NutrimentsList.propTypes = {
  nutriments: PropTypes.shape({
    potassium: PropTypes.number.isRequired,
    phosphorus: PropTypes.number.isRequired,
    sodium: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
  }).isRequired,
};

export default NutrimentsList;
