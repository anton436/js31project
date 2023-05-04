import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import { Box, Container } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductList() {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1em",
            margin: "2em 0",
          }}
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default ProductList;
