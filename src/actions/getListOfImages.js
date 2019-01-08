import axios from "axios/index";

import {
  LOAD_LIST_OF_IMAGES_SUCCSESS,
  URL
} from './actions'

import {itemsHasError,  itemsIsLoading} from './LoadingErroeItems'

export function loadImageListSuccess(responseData) {
  return {
      type: LOAD_LIST_OF_IMAGES_SUCCSESS,
      responseData
  };
}

export function getImageList() {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));
      axios.get(URL).then((response) => {
              dispatch(itemsIsLoading(false));
              return response;
          })
          .then((items) => dispatch(loadImageListSuccess(items.data)))
          .catch((err) => dispatch(itemsHasError(err)) );
  };
}