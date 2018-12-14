import * as actions from './action-types';

export const addProduct = product => ({
  type: actions.ADD_PRODUCT,
  product,
});

export const deleteProduct = () => ({
  type: actions.ADD_PRODUCT,
});
