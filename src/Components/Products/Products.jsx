import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFunction } from "../../ApiCalls/CallApis";
import Product from "./Product";

const Products = () => {
  const [AllProducts, setProducts] = useState([]);

  const getTopTenProducts = async () => {
    try {
      const products = await getFunction(
        "https://dry-tundra-71318.herokuapp.com/products"
      );
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopTenProducts();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {AllProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Grid>
    </div>
  );
};

export default Products;
