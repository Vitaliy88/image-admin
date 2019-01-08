
import  * as  actionTypes from '../actions/actions'

const initialState = {
  images: [],
  error: false,
  loading: false,
  image:{},
  imageList: []
}

export  const addImageReducer =  ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.ITEMS_IS_LOADING:
    return{
        ...state,
        loading: action.isLoading,
    }
    case actionTypes.SAVE_IMAGE_SUCCESS:
        return{
            ...state,
            images: action.data,
        }
    case actionTypes.ITEM_HAS_ERROR:
        return{
            ...state,
            error: action.error,
        }
    case actionTypes.LOAD_ITEM_SUCCSESS:
        return{
            ...state,
            image: action.responseData,
        }
    case actionTypes.DELETE_IMAGE_SUCCSESS:
        return{
            ...state,
            image: {},
        }
    case actionTypes.LOAD_LIST_OF_IMAGES_SUCCSESS:
        return{
            ...state,
            imageList: action.responseData,
        }
    default:
        return state;
  }
}
