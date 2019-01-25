import * as actions from '../actions/action-types';

const addNutriments = (nutriments, add) => {
  const nextNutriments = {};
  Object.keys(nutriments).forEach((key) => {
    nextNutriments[key] = nutriments[key] + add[key];
  });
  return nextNutriments;
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
