import axios from "axios/index";

import {
  SAVE_IMAGE_SUCCESS,
  URL
} from './actions'

import {itemsHasError,  itemsIsLoading} from './LoadingErroeItems'


export function itemsFetchDataSuccess(responseData) {
  return {
      type: SAVE_IMAGE_SUCCESS,
      responseData
  };
}

export function addImage(image) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));

      axios.post(URL, image).then((response) => {
              dispatch(itemsIsLoading(false));
              return response;
          })
          .then((items) => {
            window.location='/';
            return dispatch(itemsFetchDataSuccess(items.data));
          })
          .catch((err) => dispatch(itemsHasError(err)) );
  };
}