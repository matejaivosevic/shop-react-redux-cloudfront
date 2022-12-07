import { call, put, takeLatest } from "redux-saga/effects";
import API from "./ProductsApis";
import * as ACTIONS from "./ProductsAction";
import * as TYPES from "./ProductsTypes";

export function* getProducts() {
  try {
    const response = yield call(API.getProductsRequest);
    yield put(ACTIONS.getProductsSuccess(response.data.data));
  } catch (err) {}
}

export function* getProductById(event) {
  try {
    const response = yield call(API.getProductByIdRequest, event.id);
    yield put(ACTIONS.getProductsSuccess(response.data.data));
  } catch (err) {}
}

export function* addProduct(payload) {
  try {
    //const response = yield call(API.addProductRequest);
    // yield put(ACTIONS.addProduct(response.data));
    yield put(ACTIONS.addProduct(payload));
  } catch (err) {}
}

export function* deleteProduct(id: any): any {
  try {
    //const response = yield call(API.deleteProductRequest);
    yield put(ACTIONS.deleteProductSuccess(id));
  } catch (err) {}
}

export function* ProductsSaga() {
  yield takeLatest(TYPES.GET_PRODUCTS, getProducts);
  yield takeLatest(TYPES.ADD_PRODUCT, addProduct);
  yield takeLatest(TYPES.DELETE_PRODUCT, deleteProduct);
}
