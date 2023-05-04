import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
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
          my: "2rem",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
    </>
  );
};

export default ProductList;
