import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductsContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          my: "2em",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} item={item}></ProductCard>
        ))}
      </Box>
    </>
  );
};

export default ProductList;
