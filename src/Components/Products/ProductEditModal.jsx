import React, { useState } from "react";
import {
  Button,
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
import { postFunction, updateFunction } from "../../ApiCalls/CallApis";
import { Card } from "@material-ui/core";
import Swal from "sweetalert2";

const ProductEditModal = ({ product, handleRefresh, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    handleClose();
    Swal.fire({
      title: "Are you sure? You want to edit product",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1b9d1b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await updateFunction(`/products/${product._id}`, data);
          if (res.status === 201 || 200) {
            handleRefresh();
            handleClose();
            Swal.fire("Confirmed!", "Your  have edited product", "success");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <div>
      <Card style={{ width: "500px" }}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("title")}
              required
              name="title"
              label="Product Name"
              type="texts"
              variant="outlined"
              defaultValue={product.title}
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
                defaultValue={product.price}
                sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
              />

              <TextField
                {...register("discountPrice")}
                required
                label="Discount Price"
                id="outlined-basic"
                type="number"
                variant="outlined"
                defaultValue={product.discountPrice}
                sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
              />
            </Box>

            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                {...register("quantity")}
                required
                label="Quantity(ml)"
                id="outlined-basic"
                variant="outlined"
                defaultValue={product.quantity}
                sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
              />
              <FormControl
                sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
              >
                <InputLabel>Special Category</InputLabel>
                <Select
                  {...register("specialCategory")}
                  required
                  variant="outlined"
                  defaultValue={product.specialCategory}
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
                defaultValue={product.rating}
                sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
              />

              <FormControl
                sx={{ width: "49%", backgroundColor: "white", mb: 1 }}
              >
                <InputLabel>Special Type</InputLabel>
                <Select
                  {...register("type")}
                  required
                  defaultValue={product.type || "none"}
                >
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
              defaultValue={product.img}
              sx={{ width: "100%", backgroundColor: "white", mb: 1 }}
            />

            <TextField
              {...register("description")}
              required
              label="description"
              id="outlined-basic"
              type="texts"
              variant="outlined"
              defaultValue={product.description || product.about}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductEditModal;
