import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
import ProductSmallCard from "./ProductSmallCard";
import iconGrid2 from "../icon/icons8-health-data-90.png";
import iconGrid4 from "../icon/icons8-data-grid-50.png";

import CollectionSort from "./CollectionSort";
import CollectionButton from "./CollectionButton";
import ProductBigCard from "./ProductBigCard";
import Adminbuttons from "./AdminButtons";

const CollectionList = () => {
  const { getProducts, products } = useProducts();

  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  const [grid, setGrid] = useState(false);
  console.log(grid);

  return (
    <>
      <CollectionSort />
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>2.108 PRODUCTS</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <img
              src={iconGrid2}
              alt=""
              style={{ width: "30px" }}
              onClick={() => {
                setGrid(true);
              }}
            />
            <img
              src={iconGrid4}
              alt=""
              style={{ width: "28px" }}
              onClick={() => {
                setGrid(false);
              }}
            />
          </div>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          my: "2rem",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((item) => {
          return grid ? (
            <ProductBigCard key={item.id} item={item} />
          ) : (
            <ProductSmallCard key={item.id} item={item} />
          );
        })}
      </Box>

      <CollectionButton />
    </>
  );
};

export default CollectionList;
