import {
  ITEMS_IS_LOADING,
  ITEM_HAS_ERROR
} from './actions'

export function itemsIsLoading(isLoading) {
  return {
      type: ITEMS_IS_LOADING,
      isLoading
  };
}

export function itemsHasError(err) {
  return {
    type: ITEM_HAS_ERROR,
    error: err
  };
}
