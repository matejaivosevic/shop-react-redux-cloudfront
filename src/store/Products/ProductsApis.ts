import { productsInstance } from "../../network/apis";
const handlerEnabled = false;

const getProductsRequest = async () => {
  return await productsInstance.get("");
};

const getProductByIdRequest = async (id) => {
  return await productsInstance.get(`/${id}`);
};

const addProductRequest = async () => {
  return await productsInstance.post(`/add`, { handlerEnabled });
};

const deleteProductRequest = async () => {
  return await productsInstance.delete(`/delete`);
};

export default {
  getProductsRequest,
  getProductByIdRequest,
  addProductRequest,
  deleteProductRequest,
};
