import { createSelector } from 'reselect';

export const getProductName = state => state.scan.product.product_name;

export const getProductPicture = state => state.scan.product.image_front_url;

export const getNutriments = state => state.scan.product.nutriments;

export const getProductNutriments = createSelector(
  getNutriments,
  nutriments => ({
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
  }),
);
