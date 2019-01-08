import axios from "axios/index";

import {
  SAVE_IMAGE_SUCCESS,
  URL
} from './actions'

import {itemsHasError,  itemsIsLoading} from './LoadingErroeItems'


export function itemsEditDataSuccess(responseData) {
  return {
      type: SAVE_IMAGE_SUCCESS,
      responseData
  };
}

export function editImage(image) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));

      axios.put(`${URL}${image.id}`, image).then((response) => {
              dispatch(itemsIsLoading(false));
              return response;
          })
          .then((items) => {
            window.location='/';
            return dispatch(itemsEditDataSuccess(items.data))
          })
          .catch((err) => dispatch(itemsHasError(err)) );
  };
}