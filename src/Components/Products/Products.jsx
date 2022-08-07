import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFunction } from "../../ApiCalls/CallApis";
import Product from "./Product";

const Products = () => {
  const [AllProducts, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleRefresh = () => {
    setCounter(counter + 1);
  };

  const getProducts = async () => {
    try {
      const products = await getFunction("/products");
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, [counter]);
  return (
    <div>
      <Grid container spacing={2}>
        {AllProducts.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleRefresh={handleRefresh}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
