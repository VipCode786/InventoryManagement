import { GET_PRODUCTLIST_REQUEST,
         GET_PRODUCTLIST_SUCCESS , 
         GET_PRODUCTLIST_FAIL,
         
         PRODUCT_CREATE_REQUEST,
         PRODUCT_CREATE_SUCCESS,
         PRODUCT_CREATE_FAIL,
         PRODUCT_CREATE_RESET, } from "../constants/productListConstants";

  export const productListReducer = (state = { productLists: [] }, action) => {
    switch (action.type) {
      case GET_PRODUCTLIST_REQUEST:
        return { loading: true, productLists: [] };
  
      case GET_PRODUCTLIST_SUCCESS:
        return { loading: false, productLists: action.payload };
  
      case GET_PRODUCTLIST_FAIL:
        return { loading: false, productLists: action.payload };
  
      default:
        return state;
    }
  };

  export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case PRODUCT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };