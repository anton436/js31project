import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductList from "../components/Product/ProductList";
import SideBar from "../components/Product/SideBar";

const ProductsPage = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <ProductList />
        <SideBar />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
