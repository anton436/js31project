import axios from "axios";
import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { ACTUIONS, JSON_API_PRODUCT } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTUIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    const { data } = await axios.get(JSON_API_PRODUCT);
    dispach({ type: ACTUIONS.GET_PRODUCTS, payload: data });
  }

  const navigate = useNavigate();

  async function addProduct(newProduct) {
    await axios.post(JSON_API_PRODUCT, newProduct);
    navigate("/products");
  }

  async function deleteProduct(id) {
    await axios.delete(`${JSON_API_PRODUCT}/${id}`);
    getProducts();
  }

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
