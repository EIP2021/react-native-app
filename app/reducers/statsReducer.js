import * as actions from '../actions/action-types';
import { getIntakePercentage } from '../utils/calculations/profileCalc';
import maxNutriments from '../constants/nutriments-max';

const addNutriments = (nutriments, add) => {
  const n = nutriments;
  Object.keys(nutriments).forEach((key) => {
    n[key] += add[key];
  });
  return n;
};

const initialState = {
  nutriments: {
    potassium: 0,
    sodium: 0,
    proteins: 0,
    phosphorus: 0,
    carbohydrates: 0,
    fat: 0,
    fiber: 0,
    salt: 0,
    sugars: 0,
    calcium: 0,
    magnesium: 0,
  },
};

export default function statsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ADD_NUTRIMENTS:
      return {
        ...state,
        nutriments: addNutriments(state.nutriments, action.nutriments),
      };
    default:
      return state;
  }
}

// selector
export const getNutriments = state => state.stats.nutriments;

export const getNutrimentsPercentage = (state) => {
  const nutriments = getNutriments(state);
  return {
    potassium: getIntakePercentage(nutriments.potassium, maxNutriments.potassium),
    sodium: getIntakePercentage(nutriments.sodium, maxNutriments.sodium),
    proteins: getIntakePercentage(nutriments.proteins, maxNutriments.proteins),
    phosphorus: getIntakePercentage(nutriments.phosphorus, maxNutriments.phosphorus),
  };
};
