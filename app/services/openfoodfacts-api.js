import axios from 'axios';
import urls from '../constants/api-urls';

const getProduct = async (barcode) => {
  const url = `${urls.openFoodFacts}/produit/${barcode}.json`;
  return axios.get(url);
};

export default getProduct;
