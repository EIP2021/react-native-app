import * as actions from '../actions/action-types';
import getIntakePercentage from '../utils/calculations/profileCalc';
import maxNutriments from '../constants/maxNutriments';

const initialState = {
  nutriments: {
    potassium: 0,
    sel: 0,
    proteine: 0,
    phosphore: 0,
  },
  nutrimentsPercentage: {
    potassium: 0,
    sel: 0,
    proteine: 0,
    phosphore: 0,
  },
};

const updatePercetage = (state, product) => {
  const nextNutriments = {
    potassium: state.nutriments.potassium + product.potassium,
    sel: state.nutriments.sel + product.sel,
    proteine: state.nutriments.proteine + product.proteine,
    phosphore: state.nutriments.phosphore + product.phosphore,
  };
  return {
    nutriments: nextNutriments,
    nutrimentsPercentage: {
      potassium: getIntakePercentage(nextNutriments.potassium, maxNutriments.potassium),
      sel: getIntakePercentage(nextNutriments.sel, maxNutriments.sel),
      proteine: getIntakePercentage(nextNutriments.proteine, maxNutriments.proteine),
      phosphore: getIntakePercentage(nextNutriments.phosphore, maxNutriments.phosphore),
    },
  };
};

export default function statReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      return updatePercetage(state, action.product);
    default:
      return state;
  }
}
