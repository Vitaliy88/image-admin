import axios from "axios/index";

import {
  LOAD_ITEM_SUCCSESS,
  DELETE_IMAGE_SUCCSESS,
  URL
} from './actions'

import {itemsHasError,  itemsIsLoading} from './LoadingErroeItems'

export function loadImageSuccess(responseData) {
  return {
      type: LOAD_ITEM_SUCCSESS,
      responseData
  };
}

export function getImageById(id) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));
      axios.get(`${URL}${id}`).then((response) => {
              dispatch(itemsIsLoading(false));
              return response;
          })
          .then((items) => dispatch(loadImageSuccess(items.data)))
          .catch((err) => dispatch(itemsHasError(err)) );
  };
}

export function deleteImageSuccess(responseData) {
  return {
      type: DELETE_IMAGE_SUCCSESS,
      responseData
  };
}

export function deleteImage(id) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));
      axios.delete(`${URL}${id}`).then((response) => {
              dispatch(itemsIsLoading(false));
              return response;
          })
          .then((items) => {
            window.location='/';
            return dispatch(deleteImageSuccess());
          })
          .catch((err) => dispatch(itemsHasError(err)) );
  };
}

