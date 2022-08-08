import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFunction } from "../../ApiCalls/CallApis";
import Product from "./Product";

const Products = () => {
  const [AllProducts, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setCounter(counter + 1);
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const products = await getFunction("/products");
      setProducts(products.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, [counter]);
  return (
    <div>
      {loading ? (
        <Box
          sx={{ height: "50vh" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
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
      )}
    </div>
  );
};

export default Products;
