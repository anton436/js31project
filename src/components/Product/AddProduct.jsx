import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductsContextProvider";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });
  const { addProduct } = useProducts();

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  console.log(product);
  return (
    <>
      <Box sx={{ width: "50vw", margin: "10vh auto" }}>
        <Typography variant="h4">Admin Panel</Typography>
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
          name="name"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="filled-basic"
          label="description"
          variant="outlined"
          size="small"
          name="description"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="standard-basic"
          label="price"
          variant="outlined"
          size="small"
          name="price"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="standard-basic"
          label="picture"
          variant="outlined"
          size="small"
          name="picture"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="standard-basic"
          label="type"
          variant="outlined"
          size="small"
          name="type"
          onChange={handleInp}
        />
        <Button
          onClick={() => addProduct(product)}
          variant="outlined"
          fullWidth
        >
          Add Product
        </Button>
      </Box>
    </>
  );
};

export default AddProduct;
