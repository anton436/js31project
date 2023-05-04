import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import { ACTION, JSON_API_PPRODUCTS } from '../helpers/consts';
import { useNavigate } from 'react-router-dom';

export const productContext = createContext()


export const useProducts = () => {
  return useContext(productContext);
}
const INIT_STATE = {
  products :[],
}

const reducer = (state = INIT_STATE,action) => {
  switch (action.type) {
    case ACTION.GET_PRODUCTS:
      return {...state,products:action.payload}
  
    default:
      return state;
  }
}

const ProductsContextProvider = ({children}) => {
  const navigate = useNavigate();
  const [state,dispatch] = useReducer(reducer,INIT_STATE);

  const getProducts = async () => {
    const {data} = await axios (JSON_API_PPRODUCTS);
    dispatch({type:ACTION.GET_PRODUCTS, payload:data});
  }

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PPRODUCTS,newProduct);
    navigate('/products')
  };
const deleteProducts = async(id) => {
  await axios.delete(`${JSON_API_PPRODUCTS}/${id}`)
  getProducts()
}

  const values = {addProduct,getProducts, products:state.products,deleteProducts}
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  )
}

export default ProductsContextProvider