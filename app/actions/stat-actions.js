import * as actions from './action-types';

export const addNutriments = nutriments => ({
  type: actions.ADD_NUTRIMENTS,
  nutriments,
});

export const deleteNutriments = () => ({
  type: actions.DELETE_NUTRIMENTS,
});
