import {
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  FETCH_ERROR
} from "../utils/constant";

export const productInitialState = {
  product: [],
  error: {},
  loading: true
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        product: action.payload,
        loading: false,
        error: []
      };
    case DELETE_PRODUCT:
      return {
        product: action.payload,
        loading: false,
        error: []
      };
    case ADD_PRODUCT:
      return {
        product: action.payload,
        loading: false,
        error: []
      };
    case FETCH_ERROR:
      return {
        product: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
