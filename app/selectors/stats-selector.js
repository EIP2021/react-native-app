import { createSelector } from 'reselect';
import { getIntakePercentage } from '../utils/calculations/profileCalc';
import maxNutriments from '../constants/nutriments-max';

export const getNutrimentsConsumed = state => state.stats.nutriments;

export const getNutrimentsPercentage = createSelector(
  getNutrimentsConsumed,
  nutriments => ({
    potassium: getIntakePercentage(nutriments.potassium, maxNutriments.potassium),
    sodium: getIntakePercentage(nutriments.sodium, maxNutriments.sodium),
    proteins: getIntakePercentage(nutriments.proteins, maxNutriments.proteins),
    phosphorus: getIntakePercentage(nutriments.phosphorus, maxNutriments.phosphorus),
  }),
);
