import * as actions from '../actions/action-types';

const initialState = {
  errorMessage: '',
  pending: false,
  product: {},
};

const parseError = (error) => {
  if (error.data.status === 0) {
    return error.data.status_verbose;
  }
  return `${error.status} ${error.statusText}`;
};

export default function ScanReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.SCAN_ERROR:
      return {
        ...state,
        pending: false,
        errorMessage: parseError(action.error),
      };
    case actions.SCAN_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        pending: false,
        product: action.data.product,
      };
    case actions.SCAN_DONE:
      return {
        ...state,
        errorMessage: '',
        pending: false,
        product: {},
      };
    case actions.SCAN_PENDING:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
}

// selector
export const getProductName = state => (
  state.scan.product.product_name
);

export const getProductPicture = state => (
  state.scan.product.image_front_url
);

export const getProductNutriments = (state) => {
  const { nutriments } = state.scan.product;

  return {
    carbohydrates: nutriments.carbohydrates_100g
      ? Math.round(nutriments.carbohydrates_100g * 100) / 100 : 0,
    fat: nutriments.fat_100g ? Math.round(nutriments.fat_100g * 100) / 100 : 0,
    fiber: nutriments.fiber_100g ? Math.round(nutriments.fiber_100g * 100) / 100 : 0,
    proteins: nutriments.proteins_100g ? Math.round(nutriments.proteins_100g * 100) / 100 : 0,
    salt: nutriments.salt_100g ? Math.round(nutriments.salt_100g * 100) / 100 : 0,
    sugars: nutriments.sugars_100g ? Math.round(nutriments.sugars_100g * 100) / 100 : 0,
    sodium: nutriments.sodium_100g ? Math.round(nutriments.sodium_100g * 100) / 100 : 0,
    phosphorus: nutriments.phosphorus_100g
      ? Math.round(nutriments.phosphorus_100g * 100000) / 100 : 0,
    potassium: nutriments.potassium_100g
      ? Math.round(nutriments.potassium_100g * 100000) / 100 : 0,
    calcium: nutriments.calcium_100g ? Math.round(nutriments.calcium_100g * 100000) / 100 : 0,
    magnesium: nutriments.magnesium_100g
      ? Math.round(nutriments.magnesium_100g * 100000) / 100 : 0,
  };
};
