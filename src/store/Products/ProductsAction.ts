import * as types from "./ProductsTypes";

export const addProduct = (payload: any) => ({
  type: types.ADD_PRODUCT,
  payload,
});

export const addProductSuccess = (payload: any) => ({
  type: types.ADD_PRODUCT_SUCCESS,
  payload,
});

export const deleteProduct = (payload: any) => ({
  type: types.DELETE_PRODUCT,
  payload,
});

export const deleteProductSuccess = (payload: any) => ({
  type: types.DELETE_PRODUCT_SUCCESS,
  payload,
});
