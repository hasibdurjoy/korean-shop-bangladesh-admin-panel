import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { postFunction } from "../../ApiCalls/CallApis";

const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await postFunction("/products", data);
      console.log(res);
      if (res.status == 200 || 201) {
        reset();
        alert("added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container sx={{ width: "60%", pb: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("title")}
            required
            name="title"
            label="Product Name"
            type="texts"
            variant="outlined"
            sx={{ width: "100%", backgroundColor: "white", mb: 1 }}
          />

          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              {...register("price")}
              required
              label="Price"
              id="outlined-basic"
              type="number"
              variant="outlined"
              sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
            />

            <TextField
              {...register("discountPrice")}
              required
              label="Discount Price"
              id="outlined-basic"
              type="number"
              variant="outlined"
              sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
            />
          </Box>

          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              {...register("quantity")}
              required
              label="Quantity(ml)"
              id="outlined-basic"
              type="number"
              variant="outlined"
              sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
            />
            <FormControl sx={{ width: "49%", backgroundColor: "white", mb: 1 }}>
              <InputLabel>Special Category</InputLabel>
              <Select
                {...register("specialCategory")}
                required
                variant="outlined"
              >
                <MenuItem value="magnific">Magnific Product</MenuItem>
                <MenuItem value="featured">Featured</MenuItem>
                <MenuItem value="topTen">Top Ten</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              {...register("rating")}
              required
              label="rating"
              id="outlined-basic"
              type="number"
              variant="outlined"
              sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
            />

            <FormControl sx={{ width: "49%", backgroundColor: "white", mb: 1 }}>
              <InputLabel>Special Type</InputLabel>
              <Select {...register("type")} required variant="outlined">
                <MenuItem value="hair">Hair Care</MenuItem>
                <MenuItem value="skin">Skin Care</MenuItem>
                <MenuItem value="eye">Eye Care</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            {...register("img")}
            required
            label="Image url"
            id="outlined-basic"
            type="texts"
            variant="outlined"
            sx={{ width: "100%", backgroundColor: "white", mb: 1 }}
          />

          <TextField
            {...register("description")}
            required
            label="description"
            id="outlined-basic"
            type="texts"
            variant="outlined"
            sx={{ width: "100%", backgroundColor: "white", mb: 1 }}
          />

          <Button
            type="submit"
            style={{
              color: "white",
              backgroundColor: "#F63E7B",
              padding: "10px",
              width: "100%",
            }}
            sx={{ my: 2 }}
          >
            Add
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddNewProduct;
