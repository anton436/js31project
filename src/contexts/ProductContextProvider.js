import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

// кастомный хук для исплользования productContext
export const useProducts = () => {
  return useContext(productContext);
};

// начальное состояние
const INIT_STATE = {
  products: [],
  productDetails: {},
};

// функция reducer, которая в зависимости от action.type, меняет определенную часть состояния
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // функция для получения данных с сервера
  const getProducts = async () => {
    //делаем запрос, получаем проодукты с API
    const { data } = await axios(
      `${JSON_API_PRODUCTS}${window.location.search}`
    );

    // поместили в состояние то, что получили в запросе выше
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  // добавление нового продукта
  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    navigate("/products");
  };

  // удаление продукта
  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  // получение деталей одного продукта
  const getProductDetails = async (id) => {
    // запрос на получение одного продукта
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);

    // обновление состояния
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  // сохранение отредактированного продукта
  const saveEditedProduct = async (newProduct) => {
    // отправка patch запроса
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    //стягивание обновленных данных
    getProducts();
    navigate("/products");
  };

  //filter
  //   хук для получения pathname
  const location = useLocation();

  // функция для фильтрации, принимает 2 арнумента. Первый это по какому полю фильтровать, второй -  значение поля
  const fetchByParams = async (query, value) => {
    // создаем новый объект параметра поиска  через конструктор
    const search = new URLSearchParams(window.location.search);

    // если значение all, то параметр поиска не вшивается в запрос
    if (value === "all") {
      search.delete(query);
      //если  query === price, то значит работает фильтр по цене
    } else if (query == "price") {
      // помещаем URL параметры price_gte и price_Lte в запрос
      search.set("price_gte", value[0]);
      search.set("price_lte", value[1]);
    } else {
      // для сортировки по типу
      search.set(query, value);
    }

    // формируем новый url, на основе текущего pathname, и на основе выше стоящей проверки
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url); // переход по сформированном выше url'у
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
