import ShopActionTypes from './ShopTypes';

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLECTIONS,
  payload: collectionsMap
})