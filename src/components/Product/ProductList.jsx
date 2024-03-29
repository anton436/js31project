import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  //pagination
  const [page, setPage] = useState(1); // текущая страница
  const itemsPerPage = 3; // кол-во элементов на одной странице
  const count = Math.ceil(products?.length / itemsPerPage); // общее кол-во страниц пагинации

  // функция для изменения состояния текущей страницы
  const handleChange = (e, p) => {
    setPage(p);
  };

  // функция, которая возвращает только те элементы, которые должны отображаться на текущей странице
  function currentData() {
    // начальный индекс
    const begin = (page - 1) * itemsPerPage;
    // конечный индекс
    const end = begin + itemsPerPage;
    // возвращаем массив, состоящий из фиксированного кол-ва элементов
    return products.slice(begin, end);
  }

  return (
    <>
      <Grid item md={9}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            my: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          {currentData().map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Box>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </Grid>
    </>
  );
};

export default ProductList;
